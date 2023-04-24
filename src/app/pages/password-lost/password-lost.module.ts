import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { PasswordLostRoutingModule } from './password-lost-routing.module';

import { PasswordLostComponent } from './password-lost.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PasswordLostComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,

    PasswordLostRoutingModule,

    FormsModule
  ]
})
export class PasswordLostModule { }