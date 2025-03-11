import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { importProvidersFrom } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Función para cargar los archivos de traducción
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []), // Mantiene otros providers existentes
    provideHttpClient(), // Agrega HttpClient
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),
  ],
}).then((appRef) => {
  const translate = appRef.injector.get(TranslateService);
  translate.setDefaultLang('en'); // Idioma por defecto
  translate.use('en'); // Idioma inicial
}).catch((err) => console.error(err));



// import {bootstrapApplication} from '@angular/platform-browser';
// import {appConfig} from './app/app.config';
// import {provideHttpClient } from '@angular/common/http';
// import {AppComponent} from './app/app.component';

// bootstrapApplication(AppComponent, {
//   ...appConfig,
//   providers: [
//     ...(appConfig.providers || []), // Mantiene otros providers existentes
//     provideHttpClient(), // Agrega HttpClient
//   ],
// }).catch((err) => console.error(err));


// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));