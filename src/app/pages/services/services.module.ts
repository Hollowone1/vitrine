import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesIndexComponent } from './services-index/services-index.component';
import { ServicesDetailsComponent } from './services-details/services-details.component';
import { ServicesRoutingModule } from './services-routing.module';

@NgModule({
    declarations:[
        ServicesIndexComponent,
        ServicesDetailsComponent
    ],
    imports:[
        CommonModule,
        ServicesRoutingModule
    ]
})
export class ServicesModule{}