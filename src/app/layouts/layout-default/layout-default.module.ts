import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { footerComponent } from '../footer/footer.component';

@NgModule({
  declarations: [
    footerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ]
})
export class LayoutDefaultModule { }
