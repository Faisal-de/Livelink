import { PlaceholderScreen } from "@/components/ui/PlaceholderScreen";

export default function PatientProfileScreen() {
  return (
    <PlaceholderScreen
      title="Patient Profile"
      stitchSource="blood_response_patient_profile_simplified_aligned"
      description="Patient account, blood group, and verified profile details."
      showBack={false}
    />
  );
}
