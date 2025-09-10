import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly USER_KEY = 'currentUser';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  saveUser(user: User): void {
    if (this.isBrowser()) {
      localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    }
  }

  getUser(): User | null {
    if (this.isBrowser()) {
      const user = localStorage.getItem(this.USER_KEY);
      return user ? JSON.parse(user) : null;
    }
    return null;
  }

  removeUser(): void {
    if (this.isBrowser()) {
      localStorage.removeItem(this.USER_KEY);
    }
  }
}