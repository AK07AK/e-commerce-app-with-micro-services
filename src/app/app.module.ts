import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './sellers/customers/customers.component';
import { MarketingComponent } from './sellers/marketing/marketing.component';
import { ProdutcsComponent } from './sellers/produtcs/produtcs.component';
import { OrdersComponent } from './sellers/orders/orders.component';
import { AnalyticsComponent } from './sellers/analytics/analytics.component';
import { DashboardComponent } from './sellers/dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
    NotFoundComponent,
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
