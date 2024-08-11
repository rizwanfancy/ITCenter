import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { routes } from './app.routes';
import { LoggingInterceptor } from './interceptors/apiinterceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(
    withInterceptorsFromDi(),
  ),
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
  provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
