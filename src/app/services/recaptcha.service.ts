import { Injectable } from '@angular/core';
import { NgRecaptcha3Service } from 'ng-recaptcha3';
import { Observable, from, switchMap, map, catchError, EMPTY } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ToastrService } from './toastr.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class RecaptchaService {

  constructor(private recaptcha: NgRecaptcha3Service, private toastr: ToastrService, private httpService: HttpService) {
    this.recaptcha.init(environment.recaptchaKey);
  }

  HttpPost(url: string, data?: any): Observable<Object> {
    return from(this.recaptcha.getToken()).pipe(
      map((token) => data.captcha = token),
      switchMap((e) => this.httpService.HttpPost(url, data)),
      catchError((err, caugth) => {
        this.toastr.showToastr('COMMON.FATALERROR', 'bi-exclamation-triangle-fill');
        return EMPTY;
      })
    );
  }

}