import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { LayoutFullComponent } from './layout-full.component';
import { navbarModule } from '../navbar/navbar.module';


@NgModule({

  declarations: [
    LayoutFullComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    navbarModule,
    AppRoutingModule
  ]
})
export class LayoutFullModule { }