import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from './auth.guard';
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
  },
  {
    path: "movies",
    loadChildren: () =>
      import("./movie/movie.module").then((m) => m.MovieModule),
  },
  { path: 'login', component: LoginComponent },
  { path: 'auth', component: AuthGuard},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
