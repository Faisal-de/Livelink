import { PlaceholderScreen } from "@/components/ui/PlaceholderScreen";

export default function PatientAlertsScreen() {
  return (
    <PlaceholderScreen
      title="Alerts"
      stitchSource="blood_response_patient_alerts_simplified_aligned"
      description="Patient notifications and request status alerts."
      showBack={false}
    />
  );
}
