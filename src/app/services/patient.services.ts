import { Injectable } from '@angular/core';
import { PATIENTS } from '../data/patient.data';
import { Patient } from '../models/patient.models';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  readonly totalPatients = PATIENTS.length;

  getPatients(): Patient[] {
    return [...PATIENTS];
  }

  getPatient(id: number): Patient | undefined {
    return PATIENTS.find(patient => patient.id === id);
  }
}
