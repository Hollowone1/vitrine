import { Injectable, inject } from '@angular/core';
import { HttpErrorResponse, HttpResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from '../../services/toastr.service';

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {

  constructor(private router: Router, private toastr: ToastrService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request).pipe(
      tap(res => {
        if (res instanceof HttpResponse) {
          if (res.body.status == 401)
            this.router.navigate(['/login'], { queryParams: (this.router.url != '/') ? { ref: this.router.url.replace('/', '') } : { } });
          else if (res.body.status == 423)
            this.router.navigate(['/maintenance'], { queryParams: (this.router.url != '/') ? { ref: this.router.url.replace('/', '') } : { } });
          else if (res.body.status == 500)
            this.toastr.showToastr('COMMON.FATALERROR', 'bi-exclamation-triangle-fill');
        }
        return res;
      }),
      catchError((error: any) => {
        if (error instanceof HttpErrorResponse)
          this.toastr.showToastr('COMMON.NETWORKERROR', 'bi-wifi-off');
        return of(error);
      })
    );

  }

}