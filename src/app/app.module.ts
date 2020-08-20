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
import { PurchaseHistoryComponent } from './components/purchases/purchase-history/purchase-history.component';
import { HeaderComponent } from './components/header/header.component';
import { PriceHistoryComponent } from './components/price-history/price-history.component';
import { PurchasesListComponent } from './components/purchases/purchases-list/purchases-list.component';
import { NewPurchaseComponent } from './components/purchases/new-purchase/new-purchase.component';
import { ViewPurchaseComponent } from './components/purchases/view-purchase/view-purchase.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { MarketplacesComponent } from './components/marketplaces/marketplaces.component';

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
    NewPurchaseComponent,
    ViewPurchaseComponent,
    CategoriesComponent,
    ProductsComponent,
    MarketplacesComponent
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
