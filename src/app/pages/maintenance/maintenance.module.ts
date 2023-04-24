import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LottieModule } from 'ngx-lottie';

import { MaintenanceRoutingModule } from './maintenance-routing.module';

import { maintenanceComponent } from './maintenance.component';

@NgModule({
  declarations: [
    maintenanceComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    LottieModule,
    MaintenanceRoutingModule
  ]
})
export class MaintenanceModule { }