import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../core/auth/auth.service';
import { I18nService } from './i18n.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient, private authService: AuthService, private i18nService: I18nService) { }

  HttpGet(url: string, data: any = {}): Observable<Object> {
    if (typeof data.append !== 'undefined') {
      data.append('lang', this.i18nService.getLang());
      if (this.authService.isLogged)
        data.append('sst', this.authService.getToken());
      if (!environment.production)
        data.append('dev_key', environment.devKey);
    } else {
      data.lang = this.i18nService.getLang();
      if (this.authService.isLogged)
        data.sst = this.authService.getToken();
      if (!environment.production)
        data.dev_key = environment.devKey;
    }
    return this.httpClient.get(environment.apiURL.concat(url.toString()), data);
  }

  HttpPost(url: string, data: any = {}): Observable<Object> {
    if (typeof data.append !== 'undefined') {
      data.append('lang', this.i18nService.getLang());
      if (this.authService.isLogged)
        data.append('sst', this.authService.getToken());
    } else {
      data.lang = this.i18nService.getLang();
      if (this.authService.isLogged)
        data.sst = this.authService.getToken();
    }
    return this.httpClient.post(environment.apiURL.concat(url.toString()) + ((!environment.production) ? '?dev_key='+environment.devKey : ''), data);
  }

}