import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SellerAutherComponent } from './seller-auther/seller-auther.component';

const routes: Routes = [
   {path:'Login',
   component:LoginComponent},
   {path:'SignUp',
   component:SellerAutherComponent},
   {path:'Home',
   component:HomeComponent},
   {path:'cart',
   component:CardComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
