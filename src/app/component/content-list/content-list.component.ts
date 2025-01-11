import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-content-list',
  template: `
    <div class="container mt-5">
      <h2>Articles</h2>

      <!-- Spinner -->
      <div *ngIf="isLoading" class="d-flex justify-content-center mt-5 mb-10">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <!-- Content -->
      <div *ngIf="!isLoading">
        <div *ngFor="let content of contentList" class="card p-4 mt-3">
          <h3>{{ content.title }}</h3>
          <p [innerHTML]="content.htmlContent"></p>
          <small>Created At: {{ content.createdAt | date:'short' }}</small>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        max-width: 80%;
      }
    `,
  ],
  imports: [DatePipe, CommonModule],
  standalone: true
})
export class ContentListComponent implements OnInit {
  contentList: any[] = [];
  isLoading = true; // Add a loading state

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getAllContent().subscribe((data) => {
      this.contentList = data;
      this.isLoading = false; // Set to false after data is loaded
    });
  }
}
