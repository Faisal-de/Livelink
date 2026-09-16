import { PlaceholderScreen } from "@/components/ui/PlaceholderScreen";

export default function RequestSubmittedScreen() {
  return (
    <PlaceholderScreen
      title="Request submitted"
      stitchSource="blood_response_request_submitted_simplified"
      description="The emergency requisition has been broadcast."
      links={[{ href: "/(patient)/(tabs)", label: "Return to home" }]}
    />
  );
}
