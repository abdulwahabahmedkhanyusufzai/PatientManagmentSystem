import { Routes } from '@angular/router';
import { PatientListComponent } from './features/patients/components/patient-list.component';

export const routes: Routes = [
  { path: '', component: PatientListComponent },
  { path: '**', redirectTo: '' }
];
