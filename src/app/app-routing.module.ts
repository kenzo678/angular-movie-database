import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from './auth.guard';
import { LoginComponent } from "./login/login.component";
import { AddMovieComponent } from "./movie/add-movie/add-movie.component";
import { MovieModule } from "./movie/movie.module";

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
      canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'auth', component: AuthGuard},
  { path: 'movies/add', component: AddMovieComponent, canActivate: [AuthGuard] },
  { path: 'movies', component: MovieModule, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
