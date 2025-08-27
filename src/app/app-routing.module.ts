import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './sellers/dashboard/dashboard.component';
import { OrdersComponent } from './sellers/orders/orders.component';
import { ProdutcsComponent } from './sellers/produtcs/produtcs.component';
import { MarketingComponent } from './sellers/marketing/marketing.component';
import { AnalyticsComponent } from './sellers/analytics/analytics.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"home",component:HomeComponent},
  {path:"",redirectTo:"signup",pathMatch:"full",},
  {path:"seller",component:DashboardComponent},
  {path:"orders",component:OrdersComponent},
  {path:"products",component:ProdutcsComponent},
  {path:"marketing",component:MarketingComponent},
  {path:"analytics",component:AnalyticsComponent},
  {path:"dashboard",redirectTo:"seller",pathMatch:"full"},
  {path:"error",component:NotFoundComponent},
  {path:"*",redirectTo:"error",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
