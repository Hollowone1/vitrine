import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AutocompleteInputComponent } from './autocomplete-input.component';

import { FormsModule } from '@angular/forms';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    AutocompleteInputComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,

    FormsModule,
    PipesModule
  ],
  exports: [
    AutocompleteInputComponent
  ]
})
export class AutocompleteInputModule { }