import { Component, OnInit, Input } from '@angular/core';
import { ReviewService } from '../review.service';
import { Review } from '../../models/review';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-review-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {
  

  stars: boolean[] = [false, false, false, false, false];
  currentRating: number = 0;
  reviewText: string = '';
  bookId: number = 1; // Set this dynamically based on your needs
  userId: number = 1; // Replace with the current user ID
  isSubmitting: boolean = false;
  submitSuccess: boolean = false;
  submitError: string | null = null;

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    // Initialization logic if needed
  }
 

  setRating(rating: number) {
    this.currentRating = rating;
    this.stars = Array.from({ length: 5 }, (_, index) => index < rating);
  }

  submitReview() {
    if (!this.currentRating || !this.reviewText.trim()) {
      this.submitError = "Please provide both a rating and a review.";
      return;
    }

    this.isSubmitting = true;
    this.submitError = null;

    const review: Review = {
      bookId: this.bookId,
      userId: this.userId,
      review: this.reviewText.trim(),
      rating: this.currentRating,
      ratedDate: new Date() // Set current date and time
    };

    this.reviewService.addReview(review).subscribe({
      next: (response) => {
        console.log('Review submitted successfully:', response);
        this.submitSuccess = true;
        this.resetForm();
      },
      error: (error) => {
        console.error('Error submitting review:', error);
        this.submitError = "An error occurred while submitting your review. Please try again.";
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }

  resetForm() {
    this.currentRating = 0;
    this.stars = [false, false, false, false, false];
    this.reviewText = '';
  }
}