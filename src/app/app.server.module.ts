import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { translateServerLoaderFactory } from './core/loaders/translate-server.loader';
import { TransferState } from '@angular/platform-browser';
import { CookieBackendModule } from 'ngx-cookie-backend';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    CookieBackendModule.withOptions(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateServerLoaderFactory,
        deps: [TransferState],
      },
      defaultLanguage:'fr'
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule { }