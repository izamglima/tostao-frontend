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
import { SpendingHistoryComponent } from './components/spending-history/spending-history.component';
import { HeaderComponent } from './components/header/header.component';
import { PriceHistoryComponent } from './components/price-history/price-history.component';
import { SpendingsComponent } from './components/spendings/spendings.component';
import { NewSpendingComponent } from './components/new-spending/new-spending.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignComponent,
    SpendingHistoryComponent,
    HeaderComponent,
    PriceHistoryComponent,
    SpendingsComponent,
    NewSpendingComponent
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
