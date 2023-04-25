import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectIndexComponent } from './projects-index/projects-index.component';
import { ProjectDetailsComponent } from './projects-details/projects-details.component';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
    declarations:[
        ProjectIndexComponent,
        ProjectDetailsComponent
    ],
    imports:[
        CommonModule,
        ProjectsRoutingModule
    ]
})
export class ProjectsModule{}