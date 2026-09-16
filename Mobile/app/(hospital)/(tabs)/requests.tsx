import { PlaceholderScreen } from "@/components/ui/PlaceholderScreen";

export default function HospitalRequestsScreen() {
  return (
    <PlaceholderScreen
      title="Blood Requests"
      stitchSource="blood_response_hospital_blood_requests_inventory_style"
      description="Active requests requiring hospital verification."
      showBack={false}
      links={[{ href: "/(hospital)/request/demo", label: "Request details" }]}
    />
  );
}
