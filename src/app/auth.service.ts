// auth.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  get isAuthenticated() {
    return this.isAuthenticatedSubject.asObservable();
  }

  login(username: string, password: string) {
    // Implement your authentication logic here
    // For simplicity, let's use a hardcoded check for username and password
    const isValid = username === 'kenzo' && password === 'contrasena123';

    if (isValid) {
      this.isAuthenticatedSubject.next(true);
    }

    return isValid;
  }

  logout() {
    this.isAuthenticatedSubject.next(false);
  }
}
