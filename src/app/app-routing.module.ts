import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products/products.component';
import { ProductDetailComponent } from './products/product-detail/product-detail/product-detail.component';
import { CartComponent } from './cart/cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent, pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
