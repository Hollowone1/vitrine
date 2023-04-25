import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesIndexComponent } from './stories-index/stories-index.component';
import { StoriesDetailsComponent } from './stories-details/stories-details.component';
import { StoriesRoutingModule } from './stories-routing.module';


@NgModule({
    declarations:[
        StoriesIndexComponent,
        StoriesDetailsComponent
    ],
    imports:[
        CommonModule,
        StoriesRoutingModule
    ]
})
export class StoriesModule{}