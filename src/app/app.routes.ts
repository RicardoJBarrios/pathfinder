import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadComponent: () => import('@pathfinder/login-layout').then((c) => c.LoginLayoutComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('@pathfinder/login-page').then((c) => c.LoginPageComponent)
      }
    ]
  },
  {
    path: '',
    loadComponent: () => import('@pathfinder/main-layout').then((c) => c.MainLayoutComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('@pathfinder/main-page').then((c) => c.MainPageComponent)
      },
      { path: 'not-found', loadComponent: () => import('@pathfinder/error-page').then((c) => c.ErrorPageComponent) },
      { path: '**', redirectTo: '/not-found' }
    ]
  }
];
