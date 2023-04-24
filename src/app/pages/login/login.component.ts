import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { RecaptchaService } from '../../services/recaptcha.service';
import { AuthService } from '../../core/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { I18nService } from '../../services/i18n.service';
import { ThemeService } from '../../services/theme.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{
    
    mailPattern: any = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    passwordShow: boolean = false;
    loading: boolean = false;
    errors: number[] = [];
  
    ref: string;
  
    constructor(private seoService: SeoService, private recaptcha: RecaptchaService, public authService: AuthService, private route: ActivatedRoute, private i18nService: I18nService, private themeService: ThemeService) { }
  
    ngOnInit() {
  
      this.seoService.init('LOGIN');
  
      this.ref = this.route.snapshot.queryParams['ref'] || '';
  
    }
  
    submit(form: any) {
      this.loading = true;
      this.errors = [];
  
      this.recaptcha.HttpPost('login', form).subscribe({
        next: res => this.authService.login(res,true,this.ref),
        error: res => this.errors = res,
        });

    }
  
    togglePasswordShow() {
      this.passwordShow = !this.passwordShow;
    }
}


