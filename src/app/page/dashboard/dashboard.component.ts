import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {ContentListComponent} from '../../component/content-list/content-list.component';
import {CommonModule, NgFor} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <div class="container mt-5">
      <h1 class="mb-4">Welcome, {{ username }}</h1>
      <div class="list-group">
        <a routerLink="/orders" class="list-group-item list-group-item-action">
          Manage Orders
        </a>
        <h1 class="ql-align-center">Hello World</h1>
        <p class="ql-align-center"><br></p>
        <p class="ql-align-center">Thanks for coming to my TED Talk</p>

        <app-content-list></app-content-list>
      </div>
    </div>
  `,
  imports: [
    RouterLink,
    ContentListComponent
  ]
})
export class DashboardComponent {
  username = sessionStorage.getItem('username') || 'Guest';

  constructor(private router: Router) {
    if (!this.username) {
      this.router.navigate(['/']);
    }
  }
}
