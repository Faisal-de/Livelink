import { PlaceholderScreen } from "@/components/ui/PlaceholderScreen";

export default function RegisterPatientScreen() {
  return (
    <PlaceholderScreen
      title="Patient registration"
      stitchSource="blood_response_patient_registration"
      description="Create a patient / family account to request verified blood support."
      links={[{ href: "/(auth)/otp", label: "Continue" }]}
    />
  );
}
