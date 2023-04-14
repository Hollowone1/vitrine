import { NgModule } from '@angular/core';

import { NgNewlinesPipeModule } from 'angular-pipes';

import { ThumbPipe } from './thumb.pipe';

@NgModule({
  declarations: [
    ThumbPipe
  ],
  exports: [
    NgNewlinesPipeModule,
    ThumbPipe
  ]
})
export class PipesModule { }