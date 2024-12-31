import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';

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
      </div>
    </div>
  `,
  imports: [
    RouterLink
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
