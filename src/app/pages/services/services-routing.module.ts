import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesIndexComponent } from './services-index/services-index.component';
import { ServicesDetailsComponent } from './services-details/services-details.component';

const routes: Routes = 
[
  {
    path: '',
    children: [
      { path: '', component: ServicesIndexComponent },
      { path: ':url', component: ServicesDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }