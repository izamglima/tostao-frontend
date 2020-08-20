import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignComponent } from './components/sign/sign.component';
import { PurchaseHistoryComponent } from './components/purchase-history/purchase-history.component';
import { PriceHistoryComponent } from './components/price-history/price-history.component';
import { PurchasesListComponent } from './components/purchases-list/purchases-list.component';
import { NewPurchaseComponent } from './components/new-purchase/new-purchase.component';
import { ViewPurchaseComponent } from './components/view-purchase/view-purchase.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { MarketplacesComponent } from './components/marketplaces/marketplaces.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignComponent },
  { path: 'purchase-history', component: PurchaseHistoryComponent },
  { path: 'price-history', component: PriceHistoryComponent },
  { path: 'purchases', component: PurchasesListComponent},
  { path: 'purchases/new', component: NewPurchaseComponent },
  { path: 'purchases/:id', component: ViewPurchaseComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'marketplaces', component: MarketplacesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
