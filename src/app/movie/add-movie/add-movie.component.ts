import { MovieService } from "./../services/movie.service";
import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup, UntypedFormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-add-movie",
  templateUrl: "./add-movie.component.html",
  styleUrls: ["./add-movie.component.scss"],
})
export class AddMovieComponent implements OnInit {

  imageUrl: string;

  movieForm = new UntypedFormGroup({
    name: new UntypedFormControl("", [Validators.required]),
    image: new UntypedFormControl(null, [Validators.required]),
    genre: new UntypedFormControl("", [Validators.required]),
    releaseYear: new UntypedFormControl("", [Validators.required]),
    rating: new UntypedFormControl("", [Validators.required]),
    sinopsis: new UntypedFormControl("", [Validators.required]),
  });

  constructor(
    private router: Router,
    private movieService: MovieService,
    private http: HttpClient
  ) {}

  ngOnInit() {
  }

  addMovie() {
    if (this.movieForm.valid) {
      this.movieService.addMovie(this.movieForm.value).subscribe((res) => {
        this.movieForm.reset();
        this.router.navigate(["/"]);
      });
    }
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
        // Uncomment the following line to upload the file to the server
        this.uploadImage(file);
      };
      reader.readAsDataURL(file);
    }
  }

  private uploadImage(file: File) {
    // Replace 'YOUR_UPLOAD_ENDPOINT' with the actual server endpoint for image upload
    const uploadUrl = '../../../assets';

    const formData: FormData = new FormData();
    formData.append('file', file);

    this.http.post(uploadUrl, formData).subscribe(
      (response: any) => {
        console.log('Image uploaded successfully:', response);
        // Handle the response from the server
      },
      (error) => {
        console.error('Error uploading image:', error);
        // Handle the error
      }
    );
  }

}
