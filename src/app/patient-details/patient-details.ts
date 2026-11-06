import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Patient } from '../models/patient.models';
import { PatientService } from '../services/patient.services';

@Component({
  selector: 'app-patient-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './patient-details.html',
  styleUrl: './patient-details.css'
})
export class PatientDetail {

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly patientService = inject(PatientService);

  readonly patient: Patient | undefined =
    this.patientService.getPatient(
      Number(this.route.snapshot.paramMap.get('id'))
    );

  // Vital Signs Mock Data
  readonly vitalSigns = [
    {
      name: 'Blood Pressure',
      value: '120/80',
      unit: 'mmHg',
      status: 'Normal',
      icon: '❤️'
    },
    {
      name: 'Heart Rate',
      value: '72',
      unit: 'bpm',
      status: 'Normal',
      icon: '💓'
    },
    {
      name: 'Temperature',
      value: '98.6',
      unit: '°F',
      status: 'Normal',
      icon: '🌡️'
    },
    {
      name: 'Oxygen Level',
      value: '98',
      unit: '%',
      status: 'Normal',
      icon: '🫁'
    },
    {
      name: 'Weight',
      value: '68',
      unit: 'kg',
      status: 'Normal',
      icon: '⚖️'
    }
  ];

  backToPatients(): void {
    this.router.navigate(['/patients']);
  }
}