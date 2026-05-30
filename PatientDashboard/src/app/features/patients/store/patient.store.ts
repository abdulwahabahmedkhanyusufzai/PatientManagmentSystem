import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { Patient, PatientRequest } from '../models/patient.model';
import { PatientService } from '../services/patient.service';

interface PatientState {
  patients: Patient[];
  loading: boolean;
  error: string | null;
}

const initialState: PatientState = {
  patients: [],
  loading: false,
  error: null,
};

export const PatientStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, patientService = inject(PatientService)) => ({
    loadAll: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { loading: true })),
        switchMap(() =>
          patientService.getPatients().pipe(
            tap({
              next: (patients) => patchState(store, { patients, loading: false }),
              error: (err) => patchState(store, { error: err.message, loading: false }),
            })
          )
        )
      )
    ),
    addPatient: rxMethod<PatientRequest>(
      pipe(
        tap(() => patchState(store, { loading: true })),
        switchMap((patient) =>
          patientService.createPatient(patient).pipe(
            tap({
              next: (newPatient) =>
                patchState(store, {
                  patients: [...store.patients(), newPatient],
                  loading: false,
                }),
              error: (err) => patchState(store, { error: err.message, loading: false }),
            })
          )
        )
      )
    ),
    removePatient: rxMethod<string>(
      pipe(
        tap(() => patchState(store, { loading: true })),
        switchMap((id) =>
          patientService.deletePatient(id).pipe(
            tap({
              next: () =>
                patchState(store, {
                  patients: store.patients().filter((p) => p.id !== id),
                  loading: false,
                }),
              error: (err) => patchState(store, { error: err.message, loading: false }),
            })
          )
        )
      )
    ),
  }))
);
