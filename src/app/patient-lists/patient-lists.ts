import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from '../models/patient.models';
import { PatientService } from '../services/patient.services';

@Component({
  selector: 'app-patient-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './patient-lists.html',
  styleUrl: './patient-lists.css'
})
export class PatientList {
  private readonly router = inject(Router);
  private readonly patientService = inject(PatientService);

  readonly totalPatients = this.patientService.totalPatients;
  readonly allPatients = this.patientService.getPatients();

  searchTerm = '';
  activeTab = 'Enrolled Patients';

  get filteredPatients(): Patient[] {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) return this.allPatients;

    return this.allPatients.filter(patient =>
      patient.name.toLowerCase().includes(term) ||
      patient.mrn.toLowerCase().includes(term)
    );
  }

  openPatient(patient: Patient): void {
    this.router.navigate(['/patients', patient.id]);
  }

  createPatient(): void {
    alert('Create new patient action');
  }

  addExistingPatient(): void {
    alert('Add existing patient to clinic action');
  }

  exportPatients(): void {
    const csv = [
      ['Name', 'MRN', 'DOB', 'Contact status', 'Care navigator', 'MTD minutes'],
      ...this.allPatients.map(p => [
        p.name, p.mrn, p.dob, p.contactStatus, p.navigator, String(p.mtdMinutes)
      ])
    ].map(row => row.map(value => `"${value.replaceAll('"', '""')}"`).join(',')).join('\r\n');

    const blob = new Blob(['\uFEFF', csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'patients.csv';
    anchor.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
  }
}
