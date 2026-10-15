import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'patients' },
  {
    path: 'patients',
    loadComponent: () => import('./patient-lists/patient-lists').then(m => m.PatientList),
  },
  {
    path: 'patients/:id',
    loadComponent: () => import('./patient-details/patient-details').then(m => m.PatientDetail),
  },
  { path: '**', redirectTo: 'patients' },
];
