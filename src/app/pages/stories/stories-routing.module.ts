import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoriesDetailsComponent } from './stories-details/stories-details.component';
import { StoriesIndexComponent } from './stories-index/stories-index.component';

const routes: Routes = 
[
  {
    path: '',
    children: [
      { path: '', component: StoriesIndexComponent },
      { path: ':url', component: StoriesDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoriesRoutingModule { }