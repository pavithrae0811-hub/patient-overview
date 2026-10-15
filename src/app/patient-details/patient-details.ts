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

  readonly patient: Patient | undefined = this.patientService.getPatient(
    Number(this.route.snapshot.paramMap.get('id'))
  );

  backToPatients(): void {
    this.router.navigate(['/patients']);
  }
}
