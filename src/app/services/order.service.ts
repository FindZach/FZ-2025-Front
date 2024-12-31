import { Injectable } from '@angular/core';

export interface Order {
  id: number;
  name: string;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class OrdersService {
  private orders: Order[] = [
    { id: 1, name: 'Order 1', description: 'First order' },
    { id: 2, name: 'Order 2', description: 'Second order' },
  ];

  getOrders() {
    return [...this.orders];
  }

  addOrder(order: Order) {
    this.orders.push({ ...order, id: this.orders.length + 1 });
  }

  deleteOrder(id: number) {
    this.orders = this.orders.filter(order => order.id !== id);
  }
}
