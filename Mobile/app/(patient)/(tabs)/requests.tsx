import { PlaceholderScreen } from "@/components/ui/PlaceholderScreen";

export default function PatientRequestsScreen() {
  return (
    <PlaceholderScreen
      title="Requests"
      stitchSource="blood_response_patient_request_tracking_refined"
      description="Track active and past blood requests."
      showBack={false}
      links={[
        { href: "/(patient)/request/tracking", label: "Request tracking" },
        { href: "/(patient)/request/demo", label: "Request details" },
      ]}
    />
  );
}
