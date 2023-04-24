import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { footerComponent } from './footer.component';


@NgModule({
    declarations: [
      footerComponent
    ],
    imports: [
        CommonModule,
    
        RouterModule
      ],
      exports: [
        footerComponent
      ]
    })
    export class footerModule { }