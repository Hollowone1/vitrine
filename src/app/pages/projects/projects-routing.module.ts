import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectIndexComponent } from './projects-index/projects-index.component';
import { ProjectDetailsComponent } from './projects-details/projects-details.component';

const routes: Routes = 
[
  {
    path: '',
    children: [
      { path: '', component: ProjectIndexComponent },
      { path: ':url', component: ProjectDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }