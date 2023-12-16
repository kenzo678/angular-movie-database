import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from '../auth.service';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})

export class NavbarComponent implements OnInit {

  showMenu: boolean = false;
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  constructor(public router: Router, private authService: AuthService) {}

  ngOnInit() {}

  logout() {
    this.authService.logout();
  }

}
