import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  authService: any;
  isLoggedIn: boolean = false;
  username: String = "usuario123";
  password: String = "contra123";
  username2: String = "";
  password2: String = "";

  constructor(private router: Router) {}

  onSubmit() {
    // Aquí deberías verificar las credenciales ingresadas
    // y autenticar al usuario. Por ahora, simplemente redireccionaremos al dashboard.
    if(this.username2==this.username && this.password2==this.password){
      this.isLoggedIn = true;
    }
    if(this.isLoggedIn){
      this.router.navigate(['/movie']);
    } else {
    this.router.navigate(['/login']);
    }
  }

}
