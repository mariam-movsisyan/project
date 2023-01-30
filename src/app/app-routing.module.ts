import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NewOrdersComponent } from './components/new-orders/new-orders.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent},
  {path: 'main-layout', component: MainLayoutComponent, canActivate: [AuthGuard], children: [
      { path: 'profile', component: ProfileComponent},
      { path: 'dashboard', component: DashboardComponent},
      { path: 'new-orders', component: NewOrdersComponent},
      { path: 'order/:id', component: OrdersComponent},
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
