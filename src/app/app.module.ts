import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/Forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShippingComponent } from './shipping/shipping.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product-alerts', component: ProductAlertsComponent },
  { path: 'shipping', component: ShippingComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CartComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    ShippingComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,HttpClientModule,ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
