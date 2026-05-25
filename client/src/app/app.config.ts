import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import 'zone.js'


import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from './core/interceptors/error-interceptor';
import { loadingInterceptor } from './core/interceptors/loading-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideZoneChangeDetection(),  /// Uses zone.js for change detection"Notices any change in component and apply it to template to render it"" (traditional approach), instead of signal(Newer version of angular) 
//  Without it:  
// this.products = response.data  // products updated
// but UI still shows old products — Angular doesn't know to re-render
    provideHttpClient(withInterceptors([errorInterceptor, loadingInterceptor]))
  ]
};
