import { useLocalSearchParams } from "expo-router";

import { PlaceholderScreen } from "@/components/ui/PlaceholderScreen";

export default function PatientRequestDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <PlaceholderScreen
      title="Request details"
      stitchSource="blood_response_patient_request_details_refined"
      description={`Request ${id ?? "unknown"}. Units, hospital, and matching status.`}
      links={[{ href: "/(patient)/request/tracking", label: "Track request" }]}
    />
  );
}
