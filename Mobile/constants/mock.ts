export const donor = {
  initials: "RA",
  name: "Tariq Mehmood",
  ref: "#DNR-5821",
  bloodGroup: "B+",
  rh: "RH+",
  phone: "+92 300 1234567",
  email: "tariq@example.com",
  hub: "Lahore Hub",
  radius: "Within 5 km radius",
};

export type EmergencyRequest = {
  id: string;
  bloodGroup: string;
  rh: string;
  units: number;
  product: string;
  hospital: string;
  location: string;
  distance: string;
  neededIn: string;
  status: string;
};

export const urgentRequest: EmergencyRequest = {
  id: "demo",
  bloodGroup: "B+",
  rh: "RH+",
  units: 2,
  product: "Emergency Whole Blood",
  hospital: "Shaukat Khanum Blood Bank",
  location: "Emergency Wing • Johar Town",
  distance: "2.4 km",
  neededIn: "Needed in 2 hrs",
  status: "Matching",
};

export const emergencyRequests: EmergencyRequest[] = [
  urgentRequest,
  {
    id: "mayo-ab",
    bloodGroup: "O-",
    rh: "RH-",
    units: 1,
    product: "Packed Red Cells",
    hospital: "Mayo Hospital Blood Bank",
    location: "Trauma Bay • Anarkali",
    distance: "4.1 km",
    neededIn: "Needed in 6 hrs",
    status: "Open",
  },
];

export const activity = [
  {
    title: "Donation at Doctors Hospital",
    detail: "1 Unit Whole Blood • Completed",
    time: "3 wks ago",
    tone: "success" as const,
  },
  {
    title: "Broadcast View: Mayo Hospital",
    detail: "Target reached by local donor",
    time: "Yesterday",
    tone: "neutral" as const,
  },
];

export const notifications = [
  {
    id: "n1",
    tag: "Emergency Request",
    title: "Urgent: 2 Units B+ Whole Blood Needed",
    body: "Shaukat Khanum Blood Bank is requesting compatible donors within 5 km.",
    time: "12m ago",
    unread: true,
  },
  {
    id: "n2",
    tag: "System",
    title: "Eligibility window is open",
    body: "Your last donation was 92 days ago. You can respond today.",
    time: "2h ago",
    unread: true,
  },
  {
    id: "n3",
    tag: "Update",
    title: "Donor verification confirmed",
    body: "Your Lifelink donor profile is verified on the healthcare network.",
    time: "Yesterday",
    unread: false,
  },
];

export const donations = [
  { id: "d1", place: "Doctors Hospital", units: "1 unit whole blood", date: "12 Aug 2026", status: "Completed" },
  { id: "d2", place: "Fatima Memorial", units: "1 unit platelets", date: "04 May 2026", status: "Completed" },
];
