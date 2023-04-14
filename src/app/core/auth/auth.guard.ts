import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, @Inject(PLATFORM_ID) private platformId: any) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    let canContinue: boolean = false;

    if (isPlatformBrowser(this.platformId)) {
      canContinue = this.authService.isLogged;
      if (!canContinue)
        this.router.navigate(['/login'], { queryParams: (state.url != '/') ? { ref: state.url.replace('/', '') } : { } });
    }

    if (isPlatformServer(this.platformId))
      canContinue = true;

    return canContinue;

  }

}
