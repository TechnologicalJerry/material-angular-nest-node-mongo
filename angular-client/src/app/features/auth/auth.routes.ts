import { Routes } from '@angular/router';

export const authRoutes: Routes = [
    { path: 'signin', loadComponent: () => import('./signin/signin').then(m => m.Signin) },
    { path: 'signup', loadComponent: () => import('./signup/signup').then(m => m.Signup) },
    { path: '', redirectTo: 'signin', pathMatch: 'full' }
];