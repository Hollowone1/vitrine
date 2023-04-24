import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutDefaultComponent } from './layout-default.component';


import { navbarModule } from 'src/app/layouts/navbar/navbar.module';

@NgModule({
  declarations: [
    LayoutDefaultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    navbarModule
  ]
})
export class LayoutDefaultModule { }
