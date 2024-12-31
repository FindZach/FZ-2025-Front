import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {NavbarComponent} from './component/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
