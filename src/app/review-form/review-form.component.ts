import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../review.service';
import { Review } from '../../models/review';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-review-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.css'
})
export class ReviewFormComponent implements OnInit {
  stars: boolean[] = [false, false, false, false, false];
  currentRating: number = 0;
  reviewText: string = '';
  bookId: number = 1; // Set this dynamically based on your needs
  userId: number = 1; // Replace with the current user ID

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  setRating(rating: number) {
    this.currentRating = rating;
    this.stars = this.stars.map((_, index) => index < rating);
  }

  submitReview() {
    const review: Review = {
      bookId: this.bookId,
      userId: this.userId,
      review: this.reviewText,
      rating: this.currentRating,
      ratedDate: new Date() // Set current date and time
    };

    this.reviewService.addReview(review).subscribe(response => {
      console.log('Review submitted successfully:', response);
      // Optionally reset form or provide user feedback
    }, error => {
      console.error('Error submitting review:', error);
    });
  }

}
