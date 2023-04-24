import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { AnimationOptions } from 'ngx-lottie/lib/symbols';
import { AnimationItem } from 'ngx-lottie/lib/symbols';



@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html'
})
export class maintenanceComponent implements OnInit{

    constructor(private seoService: SeoService) { }

    ngOnInit() {
      this.seoService.init('ERROR');
    }

    options: AnimationOptions = {
        path: '/assets/animation.json',
      };

      animationCreated(animationItem: AnimationItem): void {
        console.log(animationItem);
      }
}