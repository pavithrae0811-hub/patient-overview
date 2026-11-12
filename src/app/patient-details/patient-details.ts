import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Patient } from '../models/patient.models';
import { PatientService } from '../services/patient.services';

type OverviewTab = 'Overview' | 'Clinical' | 'Care Plan' | 'Documents';

@Component({
  selector: 'app-patient-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './patient-details.html',
  styleUrl: './patient-details.css'
})
export class PatientDetail {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private patientService = inject(PatientService);

  patient: Patient | undefined = this.patientService.getPatient(
    Number(this.route.snapshot.paramMap.get('id'))
  );

  activeTab: OverviewTab = 'Overview';

  vitalSigns = [
    { label: 'Blood Pressure', value: '128/82', unit: 'mmHg', status: 'Normal', icon: '♥' },
    { label: 'Heart Rate', value: '76', unit: 'bpm', status: 'Normal', icon: '♡' },
    { label: 'Temperature', value: '98.6', unit: '°F', status: 'Normal', icon: '♨' },
    { label: 'Oxygen Level', value: '98', unit: '%', status: 'Normal', icon: '◉' }
  ];

  medicalHistory = [
    {
      date: '2026-10-15',
      title: 'Blood Pressure Review',
      description: 'Blood pressure checked. Continue current medication.',
      type: 'Consultation'
    },
    {
      date: '2026-09-20',
      title: 'Medication Review',
      description: 'Medication list reviewed and updated.',
      type: 'Medication'
    },
    {
      date: '2026-08-12',
      title: 'Initial Patient Assessment',
      description: 'Patient assessment and care plan completed.',
      type: 'Assessment'
    }
  ];

  careTasks = [
    { title: 'Monitor blood pressure', detail: 'Daily monitoring', status: 'In progress' },
    { title: 'Medication adherence', detail: 'Review prescribed medications', status: 'Pending' },
    { title: 'Monthly patient follow-up', detail: 'Contact patient this month', status: 'Completed' }
  ];

  documents = [
    { name: 'Patient Assessment', date: 'October 15, 2026', type: 'PDF' },
    { name: 'Medication List', date: 'September 20, 2026', type: 'PDF' },
    { name: 'Consent Form', date: 'August 12, 2026', type: 'PDF' }
  ];

  selectTab(tab: OverviewTab): void {
    this.activeTab = tab;
  }

  get patientInitials(): string {
    if (!this.patient) return 'PT';

    return this.patient.name
      .split(' ')
      .slice(0, 2)
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase();
  }

  backToPatients(): void {
    this.router.navigate(['/patients']);
  }

  printSummary(): void {
    window.print();
  }
  patientNotes: string[] = [];

  addNote(): void {
  const note = prompt('Enter patient note:');

  if (note && note.trim()) {
    this.patientNotes.unshift(note.trim());
    alert('Patient note added successfully!');
  }
}
}