import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutDefault } from './layouts/layout-default/layout-default-routing.module';
import { LayoutFull } from './layouts/layout-full/layout-full-routing.module';

const routes: Routes = [
  LayoutDefault.childRoutes([
    {
      path:'',
      loadChildren: () => import('./pages/index/index.module').then(m => m.IndexModule)
    },
    {
      path:'projets',
      loadChildren: () => import('./pages/projects/projects.module').then(m => m.ProjectsModule)
    },
    {
      path:'team',
      loadChildren: () => import('./pages/team/team.module').then(m => m.TeamModule)
    },
    {
      path:'services',
      loadChildren: () => import('./pages/services/services.module').then(m => m.ServicesModule)
    },
    {
      path:'stories',
      loadChildren: () => import('./pages/stories/stories.module').then(m => m.StoriesModule)
    },
    {
      path:'contact',
      loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
    },
    {
      path:'legal',
      loadChildren: () => import('./pages/legal/legal.module').then(m => m.LegalModule)
    },
    {
      path:'login',
      loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
    },
    {
      path:'reset-password',
      loadChildren: () => import('./pages/reset-password/reset-password.module').then(m => m.ResetPasswordModule)
    },
    {
      path:'password-lost',
      loadChildren: () => import('./pages/password-lost/password-lost.module').then(m => m.PasswordLostModule)
    },
    
  ]),
  LayoutFull.childRoutes([
    {
      path: '**',
      loadChildren: () => import('./pages/error/error.module').then(m => m.ErrorModule)
    },
    {
      path:'maintenance',
      loadChildren: () => import('./pages/maintenance/maintenance.module').then(m => m.MaintenanceModule)
    },
  ])


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
