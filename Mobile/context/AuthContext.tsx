import AsyncStorage from "@react-native-async-storage/async-storage";
import { type Href } from "expo-router";
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Role = "donor" | "patient" | "hospital";

export type User = {
  id: string;
  name: string;
  phone: string;
  email?: string;
  bloodGroup?: string;
  city?: string;
};

type AuthRecord = {
  user: User;
  role: Role;
};

type LoginInput = {
  identifier: string;
  password?: string;
  role?: Role;
};

type RegisterInput = {
  name: string;
  phone: string;
  email?: string;
  bloodGroup: string;
  city?: string;
  role: Role;
};

type AuthContextValue = {
  isReady: boolean;
  isAuthenticated: boolean;
  user: User | null;
  role: Role | null;
  login: (input: LoginInput) => Promise<Role>;
  register: (input: RegisterInput) => Promise<Role>;
  logout: () => Promise<void>;
};

const STORAGE_KEY = "lifelink.auth";

let memoryAuth: string | null = null;

export function dashboardHref(role: Role | null): Href {
  if (role === "patient") return "/(patient)/(tabs)";
  if (role === "hospital") return "/(hospital)/(tabs)";
  return "/(donor)/(tabs)";
}

async function readAuth(): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(STORAGE_KEY);
  } catch {
    return memoryAuth;
  }
}

async function writeAuth(value: string | null) {
  memoryAuth = value;
  try {
    if (value === null) {
      await AsyncStorage.removeItem(STORAGE_KEY);
    } else {
      await AsyncStorage.setItem(STORAGE_KEY, value);
    }
  } catch {
    // Web or storage failures keep the in-memory copy.
  }
}

function looksLikeEmail(value: string) {
  return value.includes("@");
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isReady, setIsReady] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<Role | null>(null);

  const persist = useCallback(async (record: AuthRecord | null) => {
    if (!record) {
      setUser(null);
      setRole(null);
      await writeAuth(null);
      return;
    }
    setUser(record.user);
    setRole(record.role);
    await writeAuth(JSON.stringify(record));
  }, []);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const raw = await readAuth();
        if (!raw || cancelled) return;
        const parsed = JSON.parse(raw) as AuthRecord;
        if (parsed?.user?.id && parsed.role) {
          setUser(parsed.user);
          setRole(parsed.role);
        }
      } catch {
        // Ignore corrupt or unavailable storage and stay signed out.
      } finally {
        if (!cancelled) setIsReady(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const login = useCallback(
    async ({ identifier, role: nextRole }: LoginInput) => {
      const trimmed = identifier.trim();
      const roleValue: Role = nextRole ?? "donor";
      const email = looksLikeEmail(trimmed) ? trimmed : undefined;
      const phone = email ? "+92 300 1234567" : trimmed || "+92 300 1234567";
      const name = email ? trimmed.split("@")[0] : "Tariq Mehmood";
      const nextUser: User = {
        id: `user-${Date.now()}`,
        name,
        phone,
        email: email ?? "tariq@example.com",
        bloodGroup: "B+",
        city: "Lahore",
      };
      await persist({ user: nextUser, role: roleValue });
      return roleValue;
    },
    [persist],
  );

  const register = useCallback(
    async (input: RegisterInput) => {
      const nextUser: User = {
        id: `user-${Date.now()}`,
        name: input.name.trim(),
        phone: input.phone.trim(),
        email: input.email?.trim() || undefined,
        bloodGroup: input.bloodGroup,
        city: input.city?.trim() || undefined,
      };
      await persist({ user: nextUser, role: input.role });
      return input.role;
    },
    [persist],
  );

  const logout = useCallback(async () => {
    await persist(null);
  }, [persist]);

  const value = useMemo<AuthContextValue>(
    () => ({
      isReady,
      isAuthenticated: Boolean(user && role),
      user,
      role,
      login,
      register,
      logout,
    }),
    [isReady, user, role, login, register, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return value;
}
