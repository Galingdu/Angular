import { Component } from '@angular/core';
import { ProductServiceService } from '../Service/product-service.service';
import { CurrencyPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-cart-list',
  imports: [CurrencyPipe],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css',
})
export class CartListComponent {
  constructor(private productServic: ProductServiceService) {
    this.cartList = this.productServic.cartList;
    this.handleTotal();
  }
  totalAmount: number = 0;
  total: number = 0;
  deliveryFee: number = 0;

  handleTotal() {
    this.total = this.cartList.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );
    this.deliveryFee = this.total > 1 ? 1.99 : 0;
    this.totalAmount = this.total + this.deliveryFee;
  }
  onDelete(product: any) {
    const index = this.cartList.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      this.cartList.splice(index, 1);
      localStorage.setItem('cartList', JSON.stringify(this.cartList));
    }
    this.handleTotal();
  }

  handleQtyChange(product: any, event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const quantity = Number(selectElement.value);
    if (quantity >= 0) {
      const index = this.cartList.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        this.cartList[index].qty = quantity;
        localStorage.setItem('cartList', JSON.stringify(this.cartList));
      }
      this.handleTotal();
    } else {
      selectElement.value = '0';
      
    }
  }
  cartList: any[] = [];
}
