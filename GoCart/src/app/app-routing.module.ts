import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { ContentComponent } from './content/content.component';
import { OrdersComponent } from './orders/orders.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'viewCart', component: CartComponent },
  { path: 'viewOrders', component: OrdersComponent },
  { path: 'sellProduct', component: CreateProductComponent },
  { path: 'products/:electronics', component: ProductListComponent },
  { path: 'products/:homedecor', component: ProductListComponent },
  { path: 'products/:education', component: ProductListComponent },
  { path: 'details/:productid', component: ProductDetailsComponent },
  { path: 'accountdetails/:id', component: AccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
