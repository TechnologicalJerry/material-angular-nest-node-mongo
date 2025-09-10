import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { noAuthGuard } from './core/guards/no-auth.guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/landing/landing/landing').then(m => m.Landing),
        canActivate: [noAuthGuard]
    },
    {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.routes').then(m => m.authRoutes),
        canActivate: [noAuthGuard]
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.dashboardRoutes),
        canActivate: [authGuard]
    },
    {
        path: 'about',
        loadComponent: () => import('./features/about/about/about').then(m => m.About),
    },
    {
        path: '**',
        loadComponent: () => import('./shared/components/not-found/not-found').then(m => m.NotFound)
    }
];
