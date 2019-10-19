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
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { RecaptchaModule } from 'ng-recaptcha';
import { MatStepperModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatProgressBarModule, MatAutocompleteModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatSortModule, MatSidenavModule, MatToolbarModule, MatListModule, MatTableModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
const appRoutes: Routes = [

  { path: 'dashboard', component: DashboardComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product-alerts', component: ProductAlertsComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: '', component: LoginComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CartComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    ShippingComponent,
    SignupComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,HttpClientModule,ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    RecaptchaModule.forRoot(),
    MatDatepickerModule, MatProgressBarModule, MatStepperModule, MatSidenavModule, MatToolbarModule, MatListModule, MatInputModule, MatButtonModule, MatAutocompleteModule, FormsModule, ReactiveFormsModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, LayoutModule, MatTableModule, HttpClientModule, MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
