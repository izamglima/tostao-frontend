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
import { CategoryNewComponent } from './components/categories/category-new/category-new.component';
import { CategoryViewComponent } from './components/categories/category-view/category-view.component';
import { MarketplacesListComponent } from './components/marketplaces/marketplaces-list/marketplaces-list.component';
import { MarketplaceViewComponent } from './components/marketplaces/marketplace-view/marketplace-view.component';
import { MarketplaceNewComponent } from './components/marketplaces/marketplace-new/marketplace-new.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductViewComponent } from './components/products/product-view/product-view.component';
import { ProductNewComponent } from './components/products/product-new/product-new.component';
import { CurrenciesListComponent } from './components/currencies/currencies-list/currencies-list/currencies-list.component';
import { CurrencyViewComponent } from './components/currencies/currency-view/currency-view/currency-view.component';
import { CurrencyNewComponent } from './components/currencies/currency-new/currency-new/currency-new.component';


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
  { path: 'categories/new', component: CategoryNewComponent },
  { path: 'categories/:id', component: CategoryViewComponent },
  { path: 'marketplaces', component: MarketplacesListComponent },
  { path: 'marketplaces/view', component: MarketplaceViewComponent },
  { path: 'marketplaces/new', component: MarketplaceNewComponent },
  { path: 'products', component: ProductsListComponent },
  { path: 'products/view', component: ProductViewComponent },
  { path: 'products/new', component: ProductNewComponent },
  { path: 'currencies', component: CurrenciesListComponent },
  { path: 'currencies/view', component: CurrencyViewComponent },
  { path: 'currencies/new', component: CurrencyNewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
