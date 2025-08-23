import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './seller/dashboard/dashboard.component';
import { OrdersComponent } from './seller/orders/orders.component';
import { ProdutcsComponent } from './seller/produtcs/produtcs.component';
import { MarketingComponent } from './seller/marketing/marketing.component';
import { AnalyticsComponent } from './seller/analytics/analytics.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"home",component:HomeComponent},
  {path:"",redirectTo:"signup",pathMatch:"full",},
  {path:"seller",component:DashboardComponent},
  {path:"seller/orders",component:OrdersComponent},
  {path:"seller/products",component:ProdutcsComponent},
  {path:"seller/marketing",component:MarketingComponent},
  {path:"seller/analytics",component:AnalyticsComponent},
  {path:"seller/dashboard",redirectTo:"seller",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
