import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

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

  constructor(public router: Router) {}

  ngOnInit() {}



}
