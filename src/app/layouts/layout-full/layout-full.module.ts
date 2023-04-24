import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutFullComponent } from './layout-full.component';


@NgModule({

  declarations: [
    LayoutFullComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class LayoutFullModule { }