import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RecaptchaService } from '../../services/recaptcha.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent implements OnInit {

  rpid: number;
  rpt: string;

  passwordPattern: any = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,255}$/);
  passwordShow: boolean = false;
  passwordConfirmShow: boolean = false;
  loading: boolean = false;
  errors: number[] = [];
  success: boolean = false;

  constructor(private seoService: SeoService, private route: ActivatedRoute, private router: Router, private recaptcha: RecaptchaService, private httpService: HttpService) { }

  ngOnInit() {

    this.seoService.init('RESETPASSWORD');

    this.rpid = this.route.snapshot.queryParams['rpid'] || '';
    this.rpt = this.route.snapshot.queryParams['rpt'] || '';
    this.httpService.HttpPost('reset-password', { rpid: this.rpid, rpt: this.rpt, password: 'check' }).subscribe((res: any) => {
      if (!res.errors || !res.errors.includes(4))
        this.router.navigate(['/404']);
    });

  }

  togglePasswordShow() {
    this.passwordShow = !this.passwordShow;
  }

  togglePasswordConfirmShow() {
    this.passwordConfirmShow = !this.passwordConfirmShow;
  }

  submit(form: any) {
    this.loading = true;
    this.errors = [];

    if (form.password != form.password_confirm) {
      this.errors = [6];
      this.loading = false;
    } else {
        this.recaptcha.HttpPost('reset-password', { rpid: this.rpid, rpt: this.rpt, password: form.password }).subscribe({
            next: res => this.success = true,
            error: err => this.errors = err.errors,
        });
    }
  }

}