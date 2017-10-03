import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { ClientsComponent } from './clients/clients.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { CarersComponent } from './carers/carers.component';
import { PlanningComponent } from './planning/planning.component';
import { ReportsComponent } from './reports/reports.component';
import { BillingComponent } from './billing/billing.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'cats', component: CatsComponent },
  { path: 'clients', component: ClientsComponent , canActivate: [AuthGuardLogin]},
  { path: 'carers', component: CarersComponent , canActivate: [AuthGuardLogin]},
  { path: 'planning', component: PlanningComponent , canActivate: [AuthGuardLogin]},
  { path: 'reports', component: ReportsComponent , canActivate: [AuthGuardLogin]},
  { path: 'billing', component: BillingComponent , canActivate: [AuthGuardLogin]},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuardLogin] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardAdmin] },
  { path: 'notfound', component: NotFoundComponent },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}
