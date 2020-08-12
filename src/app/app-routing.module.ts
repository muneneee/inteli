import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';
import { LoginComponent } from './login/login.component';
import { SummaryComponent } from './summary/summary.component';
import { AppComponent } from './app.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { CustomersComponent } from './customers/customers.component';


const routes: Routes = [
  {path: '', component: CustomersComponent, canActivate: [AuthGuard] },
  {path: 'revenue', component: SummaryComponent},
  {path: 'transactions', component: TransactionsComponent},
  {path: 'login',component: LoginComponent },


  {path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);
