import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { routes } from './app.routes';
<<<<<<< HEAD
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(), provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync()]
=======
import { LoggingInterceptor } from './interceptors/apiinterceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(
    withInterceptorsFromDi(),
  ),
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
  provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
>>>>>>> a28f4e3bafc6ded8ad8cb56953b5d535e22dbc87
};
