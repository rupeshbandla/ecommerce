import { Component, OnInit, Input } from '@angular/core';
import { products } from '../products';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // @Input() product;
  products = products
  constructor(private router: Router) {
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
  logout() {
    alert('Are you sure want to logout');
    localStorage.removeItem('loggedIn')
    this.router.navigate(["/"]);
    // window.location.replace('/')
  }
}
 