import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { navbarComponent } from './navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
    declarations: [
      navbarComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FontAwesomeModule
        
      ],
      exports: [
        navbarComponent
      ]
    })
    export class navbarModule {


     }