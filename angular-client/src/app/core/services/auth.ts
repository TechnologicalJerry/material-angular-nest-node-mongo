import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { AuthResponse } from '../models/auth-response.model';
import { StorageService } from './storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private storageService = inject(StorageService);

  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor() {
    this.autoLogin();
  }

  login(credentials: any): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('/api/login', credentials).pipe(
      tap(response => {
        this.handleAuth(response);
      })
    );
  }

  signup(userData: any): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('/api/signup', userData).pipe(
      tap(response => {
        this.handleAuth(response);
      })
    );
  }

  logout(): void {
    this.userSubject.next(null);
    this.storageService.removeUser();
    this.router.navigate(['/auth/login']);
  }

  private handleAuth(authResponse: AuthResponse): void {
    const user = { ...authResponse.user, token: authResponse.token };
    this.userSubject.next(user);
    this.storageService.saveUser(user);
  }

  private autoLogin(): void {
    const user = this.storageService.getUser();
    if (user) {
      this.userSubject.next(user);
    }
  }

  isLoggedIn(): boolean {
    return !!this.userSubject.value;
  }

  getCurrentUser(): User | null {
    return this.userSubject.value;
  }
}