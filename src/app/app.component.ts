import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { I18nService } from './services/i18n.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(@Inject(PLATFORM_ID) platformId: Object, private translateService: TranslateService, private i18nService : I18nService) {

    this.translateService.addLangs(['fr', 'en']);
    if (isPlatformServer(platformId))
      this.i18nService.recoverServerLang();
    else
      this.i18nService.recoverBrowserLang();

  }
}
