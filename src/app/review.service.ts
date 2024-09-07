import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Review } from '../models/review';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  
  private baseUrl = 'https://localhost:44341/api/reviews';

 // constructor(private http: HttpClient) { }
 constructor(private http: HttpClient) {}
  
  

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
    return this.http.post<any>(this.baseUrl, review);
  }

  // Get the average rating for a specific book
  getAverageRating(bookId: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/AvgRating/${bookId}`);
  }
  // Handle HTTP operation errors
  private handleError(error: any) {
    // Log error to console or send it to a logging service
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
