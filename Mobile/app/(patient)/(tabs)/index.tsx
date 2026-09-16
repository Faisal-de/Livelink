import { PlaceholderScreen } from "@/components/ui/PlaceholderScreen";

export default function PatientHomeScreen() {
  return (
    <PlaceholderScreen
      title="Patient Dashboard"
      stitchSource="blood_response_patient_home_simplified"
      description="Active requisition, urgent request card, find blood banks, and create a new request."
      showBack={false}
      links={[
        { href: "/(patient)/request/create", label: "Create New Request" },
        { href: "/(patient)/banks", label: "Find Blood Banks" },
        { href: "/(patient)/request/tracking", label: "Track Live Request" },
      ]}
    />
  );
}
