import { PlaceholderScreen } from "@/components/ui/PlaceholderScreen";

export default function VerificationSubmittedScreen() {
  return (
    <PlaceholderScreen
      title="Verification submitted"
      stitchSource="blood_response_verification_submitted_simplified"
      description="Your details are in review. Continue into a role dashboard for this setup phase."
      links={[
        { href: "/(patient)/(tabs)", label: "Open patient app" },
        { href: "/(donor)/(tabs)", label: "Open donor app" },
        { href: "/(hospital)/(tabs)", label: "Open hospital app" },
      ]}
    />
  );
}
