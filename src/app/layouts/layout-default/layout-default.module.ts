import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutDefaultComponent } from './layout-default.component';
import { navbarModule } from 'src/app/layouts/navbar/navbar.module';
import { footerModule } from '../footer/footer.module';

@NgModule({
  declarations: [
    LayoutDefaultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    navbarModule,
    footerModule,
    AppRoutingModule
  ]
})
export class LayoutDefaultModule { }
