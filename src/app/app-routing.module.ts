import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignComponent } from './components/sign/sign.component';
import { PurchaseHistoryComponent } from './components/purchases/purchase-history/purchase-history.component';
import { PriceHistoryComponent } from './components/price-history/price-history.component';
import { PurchasesListComponent } from './components/purchases/purchases-list/purchases-list.component';
import { PurchaseNewComponent } from './components/purchases/purchase-new/purchase-new.component';
import { PurchaseViewComponent } from './components/purchases/purchase-view/purchase-view.component';
import { CategoriesListComponent } from './components/categories/categories-list/categories-list.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { MarketplacesComponent } from './components/marketplaces/marketplaces.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignComponent },
  { path: 'purchase-history', component: PurchaseHistoryComponent },
  { path: 'price-history', component: PriceHistoryComponent },
  { path: 'purchases', component: PurchasesListComponent},
  { path: 'purchases/new', component: PurchaseNewComponent },
  { path: 'purchases/:id', component: PurchaseViewComponent },
  { path: 'categories', component: CategoriesListComponent },
  { path: 'products', component: ProductsListComponent },
  { path: 'marketplaces', component: MarketplacesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
