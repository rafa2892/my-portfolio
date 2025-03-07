import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from './app/app.config';
import {provideHttpClient } from '@angular/common/http';
import {AppComponent} from './app/app.component';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []), // Mantiene otros providers existentes
    provideHttpClient(), // Agrega HttpClient
  ],
}).catch((err) => console.error(err));


// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));