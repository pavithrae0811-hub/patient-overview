export interface Patient {
  id: number;
  name: string;
  dob: string;
  mrn: string;
  rpm: boolean;
  rtmr: boolean;
  rtmms: boolean;
  ccm: boolean;
  contactStatus: string;
  contactTone: 'green' | 'orange' | 'blue' | 'gray';
  contactDetail: string;
  navigator: string;
  navigatorDetail: string;
  mtdMinutes: number;
  minutesNote: string;
  minutesTone: 'good' | 'short';
  monthStatus: 'Needs attention' | 'Complete';
  drugInfo: 'attention' | 'normal';
  consent: 'On file' | 'Add consent';
  phone: string;
  email: string;
  diagnosis: string;
  allergies: string;
  medications: string[];
}
