import { useLocalSearchParams } from "expo-router";

import { PlaceholderScreen } from "@/components/ui/PlaceholderScreen";

export default function HospitalRequestDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <PlaceholderScreen
      title="Request details"
      stitchSource="blood_response_hospital_request_details_with_bottom_nav"
      description={`Hospital request ${id ?? "unknown"}. Verify and coordinate blood availability.`}
    />
  );
}
