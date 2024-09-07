import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReviewFormComponent } from "./review-form/review-form.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReviewFormComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BookReviewUI1';
}
