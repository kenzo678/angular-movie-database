// auth.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { SHA256 } from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private hashUsername(username: string): string {
    return SHA256(username).toString();
  }

  private hashPassword(password: string): string {
    return SHA256(password).toString();
  }

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  get isAuthenticated$(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  get isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }
/*
  login(username: string, password: string): boolean {
    //encriptar despues;
    const isValid = username === 'kenzo' && password === 'contra123';

    if (isValid) {
      this.isAuthenticatedSubject.next(true);
    }

    return isValid;
  }
*/

login(username: string, password: string): boolean {
  const storedUsername = 'testuser';
  const storedPassword = 'testpass';

  // Hash the values
  const storedHashedUsername = this.hashUsername(storedUsername);
  const storedHashedPassword = this.hashPassword(storedPassword);

  const enteredHashedUsername = this.hashUsername(username);
  const enteredHashedPassword = this.hashPassword(password);

  if (enteredHashedPassword === storedHashedPassword && enteredHashedUsername === storedHashedUsername) {
    // Simulate successful login
    this.isAuthenticatedSubject.next(true);
    return true;
    //return { success: true };
  } else {
    return false;
    //return { success: false, message: 'Invalid credentials' };
  }
}

  logout() {
    console.log('Logout method called');
    this.isAuthenticatedSubject.next(false);
  }
}
