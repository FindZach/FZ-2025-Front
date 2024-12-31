import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="container d-flex justify-content-center align-items-center vh-100">
      <div class="card p-4 shadow" style="max-width: 400px; width: 100%;">
        <h2 class="text-center">Login</h2>
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input id="username" [(ngModel)]="username" class="form-control" placeholder="Enter username" />
        </div>
        <button class="btn btn-primary w-100" (click)="login()">Login</button>
      </div>
    </div>
  `,
})
export class LoginComponent {
  username: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username) {
      sessionStorage.setItem('username', this.username);
      this.router.navigate(['/dashboard']);
    }
  }
}
