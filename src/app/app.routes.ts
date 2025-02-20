import { Routes } from '@angular/router';
import {LoginComponent} from './page/login/login.component';
import {DashboardComponent} from './page/dashboard/dashboard.component';
import {OrdersComponent} from './page/orders/orders/orders.component';
import {OrderDetailsComponent} from './component/orders/order-detail/order-detail.component';
import {HomeComponent} from './page/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'orders/:id', component: OrderDetailsComponent },
];
