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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignComponent },
  { path: 'expense-history', component: ExpenseHistoryComponent },
  { path: 'price-history', component: PriceHistoryComponent },
  { path: 'expenses', component: ExpensesComponent},
  { path: 'expenses/new', component: NewExpenseComponent },
  { path: 'expenses/view', component: ViewExpenseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
