import { Injectable, Inject } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { AuthService } from '../core/auth/auth.service';
import { HttpService } from './http.service';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  theme: number = 0;
  themes: number[] = [0, 1];

  constructor(private cookieService: CookieService, private authService: AuthService, private httpService: HttpService, @Inject(DOCUMENT) private document: Document) { }

  init() {
    if (this.authService.isLogged && this.authService.user.theme != this.theme)
      this.setTheme(this.authService.user.theme, true, false);
    else if (this.isValidTheme(parseInt(this.cookieService.get('theme'))) && parseInt(this.cookieService.get('theme')) != this.theme)
      this.setTheme(parseInt(this.cookieService.get('theme')), false, false);
  }

  setTheme(theme: number, setCookie: boolean = true, setAPI: boolean = true) {
    this.theme = theme;
    if (theme == 1) {
      this.document.documentElement.classList.remove('dark');
      if (setCookie)
        this.cookieService.put('theme', theme.toString(), {
          secure: true,
          expires: new Date(new Date().setFullYear(new Date().getFullYear() + 2))
        });
    } else {
      this.document.documentElement.classList.add('dark');
      if (setCookie)
        this.cookieService.remove('theme');
    }
    if (setAPI) {
      if (this.authService.isLogged)
        this.httpService.HttpPost('settings/theme', { theme: theme });
    }
  }

  isValidTheme(theme: number | undefined) {
    return theme && this.themes.find((l) => l === theme);
  }

}