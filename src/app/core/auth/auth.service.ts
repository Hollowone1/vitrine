import { Injectable, Inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  user: any;

  constructor(private cookieService: CookieService, private httpClient: HttpClient, private router: Router) { }

  getToken() {
    return this.cookieService.get('sst');
  }

  get isLogged() {
    return this.getToken() !== undefined;
  }

  setUser(datas: any) {
    this.user = datas;
  }

  login(datas: any, redirect: boolean = false, ref: string = '', callback: Function = () => {}) {
    this.cookieService.put('sst', datas.token, {
      secure: true,
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    });
    this.setUser(datas.user);
    callback();
    if (redirect)
      this.router.navigate([ref!='' ? '/'+ref : '/']);
  }

  logout(redirect: boolean = true) {
    this.httpClient.post(environment.apiURL+'logout', { sst: this.getToken() }).subscribe((res: any) => {
      if (res.status == 200) {
        let removeToken = this.cookieService.remove('sst');
        if (removeToken == null) {
          this.user = null;
          if (redirect)
            this.router.navigate(['/']);
        }
      }
    });
  }

}
