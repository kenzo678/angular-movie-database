// auth.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  get isAuthenticated$(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  get isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  login(username: string, password: string): boolean {
    //encriptar despues;
    const isValid = username === 'kenzo' && password === 'contra123';

    if (isValid) {
      this.isAuthenticatedSubject.next(true);
    }

    return isValid;
  }

  logout() {
    console.log('Logout method called');
    this.isAuthenticatedSubject.next(false);
  }
}
