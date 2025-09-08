import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  private authService = inject(AuthService);
  private router = inject(Router);

  isLoggedIn$ = this.authService.user$;

  logout(): void {
    this.authService.logout();
  }
}
