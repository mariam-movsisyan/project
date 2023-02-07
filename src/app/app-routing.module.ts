import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { ProfileResolver } from './resolver/profile.resolver';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', loadChildren: () => import('./pages/registration/registration.module').then(m => m.RegistrationModule) },
  {
    path: 'main-layout', loadChildren: () => import('./pages/main-layout/main.modules').then(m => m.MainModule),
    resolve: { profile: ProfileResolver }, canActivate: [AuthGuard],
  },
  { path: '**', component: LoginComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
