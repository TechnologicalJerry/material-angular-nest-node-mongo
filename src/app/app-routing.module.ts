import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, pathmatch: 'full' },
  { path: 'about', component: AboutComponent, pathmatch: 'full' },
  { path: 'Login', component: LoginComponent, pathmatch: 'full' },
  { path: 'signup', component: SignupComponent, pathmatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
