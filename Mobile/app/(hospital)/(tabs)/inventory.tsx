import { PlaceholderScreen } from "@/components/ui/PlaceholderScreen";

export default function HospitalInventoryScreen() {
  return (
    <PlaceholderScreen
      title="Blood inventory"
      stitchSource="blood_response_hospital_blood_inventory"
      description="Stock by blood group, critical shortages, and reserve units."
      showBack={false}
    />
  );
}
