import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesIndexComponent } from './services-index/services-index.component';
import { ServicesDetailsComponent } from './services-details/services-details.component';

@NgModule({
    declarations:[
        ServicesIndexComponent,
        ServicesDetailsComponent
    ],
    imports:[
        CommonModule,
    ]
})
export class ProjectsModule{}