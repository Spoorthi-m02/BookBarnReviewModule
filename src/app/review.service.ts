import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Review } from '../models/review';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  
  private baseUrl = 'https://localhost:44341/api/reviews';

  constructor(private http: HttpClient) { }
  

  // Get all reviews for a specific book
  getReviews(bookId: number): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.baseUrl}?bookId=${bookId}`);
  }

  // Get a specific review by reviewId
  getReview(reviewId: number): Observable<Review> {
    return this.http.get<Review>(`${this.baseUrl}/${reviewId}`);
  }

  // Add a new review
  addReview(review: Review): Observable<Review> {
    return this.http.post<Review>(this.baseUrl, review);
  }

  // Get the average rating for a specific book
  getAverageRating(bookId: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/AvgRating/${bookId}`);
  }
}
