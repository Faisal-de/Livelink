import { PlaceholderScreen } from "@/components/ui/PlaceholderScreen";

export default function CreateBloodRequestScreen() {
  return (
    <PlaceholderScreen
      title="Request Blood"
      stitchSource="blood_response_create_blood_request"
      description="Fill in verified patient details to mobilize donors and blood banks."
      links={[{ href: "/(patient)/request/submitted", label: "Submit request" }]}
    />
  );
}
