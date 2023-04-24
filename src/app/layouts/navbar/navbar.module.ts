import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { navbarComponent } from './navbar.component';


@NgModule({
    declarations: [
      navbarComponent
    ],
    imports: [
        CommonModule,
    
        RouterModule
      ],
      exports: [
        navbarComponent
      ]
    })
    export class navbarModule { }