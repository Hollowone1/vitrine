import { Component, OnInit, ViewChild } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { RecaptchaService } from '../../services/recaptcha.service';

@Component({
  selector: 'app-password-lost',
  templateUrl: './password-lost.component.html',
})
export class PasswordLostComponent implements OnInit {

  mailPattern: any = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  loading: boolean = false;
  success: boolean = false;

  constructor(private seoService: SeoService, private recaptcha: RecaptchaService) { }

  ngOnInit() {
    this.seoService.init('PASSWORDLOST');
  }

  submit(form: any) {
    this.loading = true;
    this.success = false;

    this.recaptcha.HttpPost('password-lost', form).subscribe({
        next: res => this.success = true,
        error: res => this.loading = false
        });
  }

}