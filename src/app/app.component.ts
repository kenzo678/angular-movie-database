import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: "app-root",
  template: `<app-navbar></app-navbar>

  <main>
    <router-outlet></router-outlet>
  </main>`,
})
export class AppComponent implements OnInit{
  title = "angular-movie-database";
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // Subscribe to the isAuthenticated$ observable
    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      if (!isAuthenticated) {
        // If not authenticated, navigate to the login page
        this.router.navigate(['/login']);
      }
    });
  }
}
