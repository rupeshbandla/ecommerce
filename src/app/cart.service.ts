import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  items = [];

  addToCart(product) {
    console.log(product)
    this.items.push(product);
  }

  getItems() {
    console.log(this.items)
    return this.items;
  }

  clearCart() {
    this.items = [];
    console.log(this.items)
    return this.items;
  }
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}
