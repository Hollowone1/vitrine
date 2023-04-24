import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordLostComponent } from './password-lost.component';

const routes: Routes = [{ path: '', component: PasswordLostComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordLostRoutingModule { }