export interface Patient {
  id: number;
  name: string;
  dob: string;
  mrn: string;

  // Contact Information
  phone: string;
  email: string;

  // Medical Information
  diagnosis: string;
  allergies: string;
  medications: string[];

  // Program Enrollment
  rpm: boolean;
  rtmr: boolean;
  rtmms: boolean;
  ccm: boolean;

  // Patient Status
  patientStatus: 'Active' | 'Inactive' | 'Pending';
  contactStatus: string;
  contactTone: 'green' | 'orange' | 'blue' | 'gray';
  contactDetail: string;
  consent: 'On file' | 'Add consent';

  // Care Management
  navigator: string;
  navigatorDetail: string;

  // Billing Progress
  mtdMinutes: number;
  targetMinutes: number;
  minutesNote: string;
  minutesTone: 'good' | 'short';
  monthStatus: 'Needs attention' | 'Complete';

  // Other
  drugInfo: 'attention' | 'normal';
}