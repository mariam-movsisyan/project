import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTrainingsComponent } from './components/trainings/create-trainings/create-trainings.component';
import { CreateVacanciesComponent } from './components/vacancies/create-vacancies/create-vacancies.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { VacanciesDetailComponent } from './components/vacancies/vacancies-detail/vacancies-detail.component';
import { VacanciesComponent } from './components/vacancies/vacancies.component';
import { AuthGuard } from './guards/auth.guard';
import { DetailResolver } from './resolver/detail.resolver';
import { ProjectResolver } from './resolver/project.resolver';
import { TrainingsResolver } from './resolver/trainings.resolver';
import { VacanciesDetailResolver } from './resolver/vacancies-detail.resolver';
import { VacanciesResolver } from './resolver/vacancies.resolver';
import { TrainingsDetailComponent } from './components/trainings/trainings-detail/trainings-detail.component';
import { TrainingDetailsResolver } from './resolver/training-details.resolver';
import { ProfileResolver } from './resolver/profile.resolver';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', loadChildren: () => import('./pages/registration/registration.module').then(m => m.RegistrationModule) },
  {
    path: 'main-layout', loadChildren: () => import('./pages/main-layout/main.modules').then(m => m.MainModule),
    resolve: { profile: ProfileResolver }, canActivate: [AuthGuard],
    //   children: [
    //   { path: 'profile', component: ProfileComponent, resolve: { profile: ProfileResolver } },
    //   // { path: 'dashboard', component: DashboardComponent },
    //   { path: 'projects', component: ProjectsComponent, resolve: { projects: ProjectResolver } },

    //   { path: 'create-project', component: CreateProjectComponent },
    //   { path: 'project/:id', component: ProjectComponent, resolve: { detail: DetailResolver } },
    //   { path: 'trainings', component: TrainingsComponent, resolve: { training: TrainingsResolver } },
    //   { path: 'vacancies', component: VacanciesComponent, resolve: { vacancies: VacanciesResolver } },
    //   { path: 'create-vacancies', component: CreateVacanciesComponent },
    //   { path: 'vacancies-detail/:id', component: VacanciesDetailComponent, resolve: { vacanciesDetail: VacanciesDetailResolver } },
    //   { path: 'create-trainings', component: CreateTrainingsComponent },
    //   { path: 'trainings-detail/:id', component: TrainingsDetailComponent, resolve: { trainingDetail: TrainingDetailsResolver } }

    // ]
  },
  { path: '**', component: LoginComponent },
  // { path: '**', redirectTo: 'login', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
