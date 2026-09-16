import { PlaceholderScreen } from "@/components/ui/PlaceholderScreen";

export default function HospitalHomeScreen() {
  return (
    <PlaceholderScreen
      title="Hospital Home Dashboard"
      stitchSource="blood_response_hospital_blood_bank_home_dashboard"
      description="Pending verifications, nearby emergency requests, and inventory snapshot."
      showBack={false}
      links={[
        { href: "/(hospital)/(tabs)/requests", label: "View Requests" },
        { href: "/(hospital)/(tabs)/inventory", label: "Blood inventory" },
      ]}
    />
  );
}
