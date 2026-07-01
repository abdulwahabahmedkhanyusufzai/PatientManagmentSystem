import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PatientRequest } from '../models/patient.model';
import { LucideAngularModule, X, Save } from 'lucide-angular';

@Component({
  selector: 'app-patient-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LucideAngularModule],
  template: `
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
        <div class="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
          <h2 class="text-xl font-semibold text-gray-800">New Patient Record</h2>
          <button (click)="close.emit()" class="text-gray-400 hover:text-gray-600 transition-colors">
            <lucide-icon [name]="X" class="w-5 h-5"></lucide-icon>
          </button>
        </div>

        <form [formGroup]="patientForm" (ngSubmit)="onSubmit()" class="p-6 space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input 
              type="text" 
              formControlName="name"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="e.g. John Doe"
            >
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input 
              type="email" 
              formControlName="email"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="john.doe@example.com"
            >
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Physical Address</label>
            <input 
              type="text" 
              formControlName="address"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="123 Planetary Way"
            >
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
              <input 
                type="date" 
                formControlName="dateOfBirth"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Registration Date</label>
              <input 
                type="date" 
                formControlName="registeredDate"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              >
            </div>
          </div>

          <div class="pt-4 flex gap-3">
            <button 
              type="button"
              (click)="close.emit()"
              class="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </button>
            <button 
              type="submit"
              [disabled]="patientForm.invalid"
              class="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <lucide-icon [name]="Save" class="w-4 h-4"></lucide-icon>
              Save Patient
            </button>
          </div>
        </form>
      </div>
    </div>
  `
})
export class PatientFormComponent {
  private fb = inject(FormBuilder);
  
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<PatientRequest>();

  readonly X = X;
  readonly Save = Save;

  patientForm = this.fb.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    address: ['', [Validators.required]],
    dateOfBirth: ['', [Validators.required]],
    registeredDate: [new Date().toISOString().split('T')[0], [Validators.required]]
  });

  onSubmit() {
    if (this.patientForm.valid) {
      this.save.emit(this.patientForm.getRawValue());
      this.close.emit();
    }
  }
}
