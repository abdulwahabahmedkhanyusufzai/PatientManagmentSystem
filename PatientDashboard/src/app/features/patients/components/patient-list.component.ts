import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientStore } from '../store/patient.store';
import { PatientFormComponent } from './patient-form.component';
import { ChatWidgetComponent } from '../../../shared/components/chat-widget.component';
import { LucideAngularModule, UserPlus, Trash2, Mail, MapPin, Calendar, LogOut } from '@lucide/angular';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, PatientFormComponent, ChatWidgetComponent],
  template: `
    <div class="p-6 bg-gray-50 min-h-screen">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="flex justify-between items-center mb-8">
          <div>
            <h1 class="text-3xl font-bold text-gray-900 tracking-tight">Patient Directory</h1>
            <p class="mt-2 text-sm text-gray-600">Manage your planetary-scale patient records with ease.</p>
          </div>
          <div class="flex gap-3">
            <button 
              (click)="showForm.set(true)"
              class="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm font-medium"
            >
              <lucide-icon [name]="UserPlus" class="w-4 h-4"></lucide-icon>
              Add Patient
            </button>
            <button 
              class="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              <lucide-icon [name]="LogOut" class="w-4 h-4"></lucide-icon>
              Logout
            </button>
          </div>
        </div>

        @if (showForm()) {
          <app-patient-form 
            (close)="showForm.set(false)"
            (save)="store.addPatient($event)"
          ></app-patient-form>
        }

        <app-chat-widget></app-chat-widget>

        <!-- Error State -->
        @if (store.error()) {
          <div class="mb-6 p-4 bg-red-50 border-l-4 border-red-400 text-red-700">
            <p class="font-bold">Error</p>
            <p>{{ store.error() }}</p>
          </div>
        }

        <!-- Loading State -->
        @if (store.loading()) {
          <div class="flex justify-center items-center h-64">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
        } @else {
          <!-- Table -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <table class="w-full text-left">
              <thead class="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th class="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                  <th class="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</th>
                  <th class="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Address</th>
                  <th class="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Registered</th>
                  <th class="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                @for (patient of store.patients(); track patient.id) {
                  <tr class="hover:bg-gray-50 transition-colors group">
                    <td class="px-6 py-4">
                      <div class="text-sm font-medium text-gray-900">{{ patient.name }}</div>
                      <div class="text-xs text-gray-500 flex items-center gap-1 mt-1">
                        <lucide-icon [name]="Calendar" class="w-3 h-3"></lucide-icon>
                        DOB: {{ patient.dateOfBirth }}
                      </div>
                    </td>
                    <td class="px-6 py-4">
                      <div class="text-sm text-gray-600 flex items-center gap-2">
                        <lucide-icon [name]="Mail" class="w-4 h-4 text-gray-400"></lucide-icon>
                        {{ patient.email }}
                      </div>
                    </td>
                    <td class="px-6 py-4">
                      <div class="text-sm text-gray-600 flex items-center gap-2">
                        <lucide-icon [name]="MapPin" class="w-4 h-4 text-gray-400"></lucide-icon>
                        {{ patient.address }}
                      </div>
                    </td>
                    <td class="px-6 py-4">
                      <span class="px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {{ patient.registeredDate }}
                      </span>
                    </td>
                    <td class="px-6 py-4 text-right">
                      <button 
                        (click)="store.removePatient(patient.id)"
                        class="p-2 text-gray-400 hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100"
                        title="Delete Patient"
                      >
                        <lucide-icon [name]="Trash2" class="w-5 h-5"></lucide-icon>
                      </button>
                    </td>
                  </tr>
                } @empty {
                  <tr>
                    <td colspan="5" class="px-6 py-12 text-center text-gray-500">
                      No patients found. Click "Add Patient" to get started.
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        }
      </div>
    </div>
  `,
  styles: []
})
export class PatientListComponent implements OnInit {
  readonly store = inject(PatientStore);
  readonly showForm = signal(false);
  
  // Icon constants for template
  readonly UserPlus = UserPlus;
  readonly Trash2 = Trash2;
  readonly Mail = Mail;
  readonly MapPin = MapPin;
  readonly Calendar = Calendar;

  ngOnInit() {
    this.store.loadAll();
  }
}
