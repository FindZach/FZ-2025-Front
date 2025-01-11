import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, NgIf],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #0a4275;">
      <div class="container-fluid">
        <a class="navbar-brand" routerLink="/"><img width="30" height="35" class="logo" src="logo.png"></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" routerLink="/dashboard" routerLinkActive="active">Articles</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/orders" routerLinkActive="active">Manage Orders</a>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ username }}
              </a>

              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li><a *ngIf="isLoggedIn" class="dropdown-item" routerLink="/dashboard">Dashboard</a></li>
                <li><a *ngIf="isLoggedIn" class="dropdown-item" (click)="logout()">Logout</a></li>

                <li><a *ngIf="!isLoggedIn" class="dropdown-item" (click)="viewLogin()">Login</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      .navbar-nav .nav-link.active {
        font-weight: bold;
        text-decoration: underline;
      }
    `,
  ],
})
export class NavbarComponent {
  username = sessionStorage.getItem('username') || 'Guest';
  isLoggedIn = sessionStorage.getItem('isLoggedIn') || false;

  logout() {
    sessionStorage.clear();
    location.reload();
  }

  viewLogin() {
    //route user to Login page
  }

}
