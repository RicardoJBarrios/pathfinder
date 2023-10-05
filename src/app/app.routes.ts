import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('@pathfinder/main-layout').then((c) => c.MainLayoutComponent),
    children: [
      { path: '', loadComponent: () => import('@pathfinder/main-page').then((c) => c.MainPageComponent) },
      { path: 'not-found', loadComponent: () => import('@pathfinder/error-page').then((c) => c.ErrorPageComponent) },
      { path: '**', redirectTo: '/not-found' }
    ]
  }
];
