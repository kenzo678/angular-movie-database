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

  ngOnInit() {
    // Check if the user is already authenticated
    if (this.authService.isAuthenticated) {
      // If authenticated, navigate to the /movies route
      this.router.navigate(['/movies']);
    }
  }

  onSubmit() {
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
