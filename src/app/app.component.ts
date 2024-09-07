import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReviewFormComponent } from "./review-form/review-form.component";
import { HttpClient } from '@angular/common/http';
import { ReviewService } from './review.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReviewFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
  
})
export class AppComponent {
  title = 'BookReviewUI1';
  constructor(private http: HttpClient, private reviewService: ReviewService) {}
}
