import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ResetPasswordRoutingModule } from './reset-password-routing.module';

import { ResetPasswordComponent } from './reset-password.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,

    ResetPasswordRoutingModule,

    FormsModule
  ]
})
export class ResetPasswordModule { }