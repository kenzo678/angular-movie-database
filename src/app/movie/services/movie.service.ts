import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";
import { delay } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Movie, movies } from "../models/movie.model";

const httpOptions = {
  headers: new HttpHeaders({
    'Cache-Control': 'no-cache',
  }),
};
@Injectable({
  providedIn: "root",
})


export class MovieService {

  private ROOT_URL = "http://localhost:3000/movies";
  //private apiUrlWithTimestamp = `${this.ROOT_URL}?timestamp=${new Date().getTime()}`;

  constructor(private http: HttpClient) {}


  addMovie(movie: Movie) {
    return this.http.post(this.ROOT_URL, movie, httpOptions);
  }

  getMoviesFromHttp() {
    return this.http.get<Movie[]>(this.ROOT_URL, httpOptions).pipe(this.addDelay);
  }

  movieFromHttp(id: number) {
    return this.http.get<Movie>(`${this.ROOT_URL}/${id}`, httpOptions);
  }
  /*
  getMovies() {
    return of(movies);
  }

  movie(id: number) {
    return of(
      movies.find(movie => +movie.id === +id)
    );
  }
  */
  addDelay(obs: Observable<any>) {
    return obs.pipe(delay(1000));
  }
}
