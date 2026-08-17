import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import 'zone.js'


import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from './core/interceptors/error-interceptor';
import { loadingInterceptor } from './core/interceptors/loading-interceptor';
import { lastValueFrom } from 'rxjs';
import { InitService } from './core/services/init';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideZoneChangeDetection(),  /// Uses zone.js for change detection"Notices any change in component and apply it to template to render it"" (traditional approach), instead of signal(Newer version of angular) 
    //  Without it:  
    // this.products = response.data  // products updated
    // but UI still shows old products — Angular doesn't know to re-render
    provideAppInitializer(async () => {
      const initService = inject(InitService)
      return lastValueFrom(initService.init()).finally(() => {
        const splash  = document.getElementById('initial-splash')
        if (splash) {
          splash.remove()
        }
      })
    }),
    provideHttpClient(withInterceptors([errorInterceptor, loadingInterceptor]))
  ]
};
