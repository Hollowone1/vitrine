import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectIndexComponent } from './projects-index/projects-index.component';
import { ProjectDetailsComponent } from './projects-details/projects-details.component';

@NgModule({
    declarations:[
        ProjectIndexComponent,
        ProjectDetailsComponent
    ],
    imports:[
        CommonModule,
    ]
})
export class ProjectsModule{}