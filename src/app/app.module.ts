import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './seller/customers/customers.component';
import { MarketingComponent } from './seller/marketing/marketing.component';
import { ProdutcsComponent } from './seller/produtcs/produtcs.component';
import { OrdersComponent } from './seller/orders/orders.component';
import { AnalyticsComponent } from './seller/analytics/analytics.component';
import { DashboardComponent } from './seller/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    CustomersComponent,
    MarketingComponent,
    ProdutcsComponent,
    OrdersComponent,
    AnalyticsComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
