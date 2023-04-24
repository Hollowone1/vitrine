import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { maintenanceComponent } from './maintenance.component';

const routes: Routes = [{ path: '', component: maintenanceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoutingModule { }