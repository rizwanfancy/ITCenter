import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { InterceptorService } from '../@core/http-interceptor.service';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(
    withInterceptorsFromDi(),
  ),
  { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync()]
};
