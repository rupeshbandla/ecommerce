import { Component, OnInit, Input } from '@angular/core';
import { products } from '../products';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // @Input() product;
  products = products
  constructor() {
    console.log(products)
  }

  ngOnInit() {
  }
  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
