import { PlaceholderScreen } from "@/components/ui/PlaceholderScreen";

export default function PatientRequestTrackingScreen() {
  return (
    <PlaceholderScreen
      title="Request tracking"
      stitchSource="blood_response_patient_request_tracking_refined"
      description="Live status of the active blood requisition."
      links={[{ href: "/(patient)/request/demo", label: "Open details" }]}
    />
  );
}
