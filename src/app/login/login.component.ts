import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLoggedIn: boolean = false;
  username: string = "";
  password: string = "";

  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {}

  onSubmit() {
    /*
    if (this.username === 'your_username' && this.password === 'your_password') {
      alert('Login successful!');
    } else {
      alert('Invalid credentials. Please try again.');
    }
    */
    const isValid = this.authService.login(this.username, this.password);

    if (isValid) {
      this.router.navigate(['/movies']);
    } else {
      this.showErrorMessage('Invalid username or password');
    }
  }

  login() {
    const isValid = this.authService.login(this.username, this.password);

    if (isValid) {
      this.router.navigate(['/movies']);
    } else {
      this.showErrorMessage('Invalid username or password');
    }
  }

  private showErrorMessage(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // Set the duration for which the snackbar is displayed in milliseconds
    });
  }

}
