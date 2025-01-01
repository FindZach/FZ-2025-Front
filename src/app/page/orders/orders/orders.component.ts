import { Component } from '@angular/core';
import {Order, OrdersService} from '../../../services/order.service';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mt-5">
      <h2>Orders</h2>
      <ul class="list-group mb-4">
        <li
          *ngFor="let order of orders"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <div>
            <strong>{{ order.name }}</strong> - {{ order.description }}
          </div>
          <div>
            <button class="btn btn-info btn-sm me-2" (click)="viewOrder(order.id)">View</button>
            <button class="btn btn-danger btn-sm" (click)="deleteOrder(order.id)">Delete</button>
          </div>
        </li>
      </ul>
      <div class="card p-4 shadow">
        <h3 class="mb-3">Add New Order</h3>
        <div class="mb-3">
          <input
            [(ngModel)]="newOrder.name"
            class="form-control"
            placeholder="Order Name"
          />
        </div>
        <div class="mb-3">
          <input
            [(ngModel)]="newOrder.description"
            class="form-control"
            placeholder="Description"
          />
        </div>
        <button class="btn btn-primary w-100" (click)="addOrder()">Add Order</button>
      </div>
    </div>
  `,
})
export class OrdersComponent {
  orders: Order[] = [];
  newOrder: Partial<Order> = {};

  constructor(private ordersService: OrdersService, private router: Router) {
    this.loadOrders();
  }

  loadOrders() {
    this.orders = this.ordersService.getOrders();
  }

  addOrder() {
    if (this.newOrder.name && this.newOrder.description) {
      this.ordersService.addOrder(this.newOrder as Order);
      this.loadOrders();
      this.newOrder = {};
    }
  }

  deleteOrder(id: number) {
    this.ordersService.deleteOrder(id);
    this.loadOrders();
  }

  viewOrder(id: number) {
    this.router.navigate([`/orders/${id}`]);
  }
}
