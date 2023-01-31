import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NewOrdersComponent } from './components/new-orders/new-orders.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthGuard } from './guards/auth.guard';
import { DetailResolver } from './resolver/detail.resolver';
import { ProjectResolver } from './resolver/project.resolver';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent},
  {path: 'main-layout', component: MainLayoutComponent, canActivate: [AuthGuard], children: [
      { path: 'profile', component: ProfileComponent},
      { path: 'dashboard', component: DashboardComponent},
      { path: 'projects', component: ProjectsComponent, resolve:{projects:ProjectResolver}},
      { path: 'create-project', component: CreateProjectComponent},
      { path: 'project/:id', component: ProjectComponent, resolve:{projectDetail: DetailResolver},},

      // { path: 'new-orders', component: NewOrdersComponent},
      // { path: 'order/:id', component: OrdersComponent},
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
