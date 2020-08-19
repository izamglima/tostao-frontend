import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignComponent } from './components/sign/sign.component';
import { SpendingHistoryComponent } from './components/spending-history/spending-history.component';
import { PriceHistoryComponent } from './components/price-history/price-history.component';
import { SpendingsComponent } from './components/spendings/spendings.component';
import { NewSpendingComponent } from './components/new-spending/new-spending.component';
import { ViewSpendingComponent } from './components/view-spending/view-spending.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignComponent },
  { path: 'spending-history', component: SpendingHistoryComponent },
  { path: 'price-history', component: PriceHistoryComponent },
  { path: 'spendings', component: SpendingsComponent},
  { path: 'spendings/new', component: NewSpendingComponent },
  { path: 'spendings/view', component: ViewSpendingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
