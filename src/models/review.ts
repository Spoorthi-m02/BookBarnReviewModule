export interface Review {
    reviewId?: number; // Optional if it's auto-generated
    bookId: number;
    userId: number;
    review: string;
    rating: number;
    ratedDate?: Date; // Optional if you want to track when the review was created
  }