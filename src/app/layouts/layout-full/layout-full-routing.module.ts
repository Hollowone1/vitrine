import { Routes, Route } from '@angular/router';

import { LayoutFullComponent } from './layout-full.component';

export class LayoutFull {

  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: LayoutFullComponent,
      children: routes
    };
  }

}