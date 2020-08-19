import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignComponent } from './components/sign/sign.component';
import { ExpenseHistoryComponent } from './components/expense-history/expense-history.component';
import { PriceHistoryComponent } from './components/price-history/price-history.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { NewExpenseComponent } from './components/new-expense/new-expense.component';
import { ViewExpenseComponent } from './components/view-expense/view-expense.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { MarketplacesComponent } from './components/marketplaces/marketplaces.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignComponent },
  { path: 'expense-history', component: ExpenseHistoryComponent },
  { path: 'price-history', component: PriceHistoryComponent },
  { path: 'expenses', component: ExpensesComponent},
  { path: 'expenses/new', component: NewExpenseComponent },
  { path: 'expenses/view', component: ViewExpenseComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'marketplaces', component: MarketplacesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
