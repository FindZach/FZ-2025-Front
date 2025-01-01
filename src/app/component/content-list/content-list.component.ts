import {Component, OnInit} from '@angular/core';
import {ContentService} from '../../services/content.service';
import {CommonModule, DatePipe} from '@angular/common';

@Component({
  selector: 'app-content-list',
  template: `
    <div class="container mt-5">
      <h2>All Content</h2>
      <div *ngFor="let content of contentList" class="card p-4 mt-3">
        <h3>{{ content.title }}</h3>
        <p [innerHTML]="content.htmlContent"></p>
        <small>Created At: {{ content.createdAt | date:'short' }}</small>
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
  imports: [
    DatePipe, CommonModule
  ],
  standalone: true
})
export class ContentListComponent implements OnInit {
  contentList: any[] = [];

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getAllContent().subscribe((data) => {
      this.contentList = data;
    });
  }
}
