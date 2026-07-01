import { ApplicationConfig, provideBrowserGlobalErrorListeners, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { LucideAngularModule, UserPlus, Trash2, Mail, MapPin, Calendar, X, Save, MessageSquare, Send, LogOut } from 'lucide-angular';
import { provideOAuthClient } from 'angular-oauth2-oidc';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideOAuthClient(),
    importProvidersFrom(LucideAngularModule.pick({ UserPlus, Trash2, Mail, MapPin, Calendar, X, Save, MessageSquare, Send, LogOut }))
  ]
};
