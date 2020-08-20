import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartsService } from './services/charts.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignComponent } from './components/sign/sign.component';
import { HeaderComponent } from './components/header/header.component';
import { PriceHistoryComponent } from './components/price-history/price-history.component';
import { PurchaseHistoryComponent } from './components/purchases/purchase-history/purchase-history.component';
import { PurchasesListComponent } from './components/purchases/purchases-list/purchases-list.component';
import { PurchaseNewComponent } from './components/purchases/purchase-new/purchase-new.component';
import { PurchaseViewComponent } from './components/purchases/purchase-view/purchase-view.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductViewComponent } from './components/products/product-view/product-view.component';
import { ProductNewComponent } from './components/products/product-new/product-new.component';
import { CategoriesListComponent } from './components/categories/categories-list/categories-list.component';
import { CategoryNewComponent } from './components/categories/category-new/category-new.component';
import { CategoryViewComponent } from './components/categories/category-view/category-view.component';
import { MarketplacesListComponent } from './components/marketplaces/marketplaces-list/marketplaces-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignComponent,
    PurchaseHistoryComponent,
    HeaderComponent,
    PriceHistoryComponent,
    PurchasesListComponent,
    PurchaseNewComponent,
    PurchaseViewComponent,
    CategoriesListComponent,
    ProductsListComponent,
    MarketplacesListComponent,
    ProductViewComponent,
    ProductNewComponent,
    CategoryNewComponent,
    CategoryViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [ChartsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
