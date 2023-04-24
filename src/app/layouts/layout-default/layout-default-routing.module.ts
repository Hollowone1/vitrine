import { Routes, Route } from '@angular/router';

import { LayoutDefaultComponent } from './layout-default.component';

export class LayoutDefault {

  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: LayoutDefaultComponent,
      children: routes
    };
  }

}