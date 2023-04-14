import { DOCUMENT, isPlatformServer } from '@angular/common';
import { EventEmitter, Inject, Injectable, Optional, PLATFORM_ID, Renderer2, RendererFactory2 } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie';
import { AuthService } from '../core/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  isServer!: boolean;
  public onLangChange: EventEmitter<LangChangeEvent>;
  private renderer: Renderer2;

  constructor(
    @Optional() @Inject(REQUEST) private request: Request,
    @Inject(PLATFORM_ID) platformId: Object,
    @Inject(DOCUMENT) private document: Document,
    rendererFactory: RendererFactory2,
    private translateService: TranslateService,
    private transferState: TransferState,
    private cookieService: CookieService,
    private authService: AuthService
  ) {

    this.renderer = rendererFactory.createRenderer(null, null);
    this.onLangChange = this.translateService.onLangChange;

  }

  initLogged() {
    if (this.authService.user.lang != this.translateService.currentLang)
      this.changeCurrentLang(this.authService.user.lang, true);
  }

  changeCurrentLang(lang: string, setCookie: boolean = false, callback: Function = () => {}) {
    this.translateService.use(lang).subscribe(_ => callback());
    if (this.document) {
      this.renderer.setAttribute(this.document.querySelector('html'), 'lang', lang);
      if (setCookie && !this.isServer)
        this.cookieService.put('lang', lang, {
          secure: true,
          expires: new Date(new Date().setFullYear(new Date().getFullYear() + 2))
        });
    }
  }

  recoverServerLang(callback: Function = () => {}) {
    this.changeCurrentLang(this.isValidLang(this.request?.cookies?.lang) || this.isValidLang(this.request?.headers['accept-language']?.substring(0, 2)) || 'fr',
    false,
    () => {
      this.translateService.onLangChange.subscribe(({lang}) => {
        this.changeCurrentLang(lang, true);
      });
      callback();
    });
    this.transferState.set(makeStateKey<string>('lang'), this.translateService.currentLang);
  }

  recoverBrowserLang(callback: Function = () => {}) {
    this.changeCurrentLang(this.isValidLang(this.transferState.get(makeStateKey<string>('lang'), undefined)) || this.isValidLang(this.getCookieLang()) || this.isValidLang(this.translateService.getDefaultLang()) || this.isValidLang(this.translateService.getBrowserLang()),
    false,
    () => {
      this.translateService.onLangChange.subscribe(({lang}) => {
        this.changeCurrentLang(lang, true);
      });
      callback();
    });
  }

  getCookieLang() {
    return this.cookieService.get('lang');
  }

  isValidLang(lang: string | undefined) {
    return lang && this.translateService.getLangs().find((l) => l === lang);
  }

  getLang() {
    return this.translateService.currentLang;
  }

  getTranslation(key: string | string[], interpolateParams?: Object): Observable<any> {
    return this.translateService.get(key, interpolateParams);
  }

}
