import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class OrdersService {
  private orders: Order[] = [
    { id: 1, name: 'Order 1', description: 'First order', details: '' },
    { id: 2, name: 'Order 2', description: 'Second order', details: '' },
  ];

  getOrders() {
    return [...this.orders];
  }

  getOrderById(id: number) {
    return this.orders.find(order => order.id === id);
  }

  updateOrder(updatedOrder: Order) {
    const index = this.orders.findIndex(order => order.id === updatedOrder.id);
    if (index !== -1) {
      this.orders[index] = updatedOrder;
    }
  }

  addOrder(order: Order) {
    this.orders.push({ ...order, id: this.orders.length + 1, details: '' });
  }

  deleteOrder(id: number) {
    this.orders = this.orders.filter(order => order.id !== id);
  }
}

export interface Order {
  id: number;
  name: string;
  description: string;
  details: string;
}
