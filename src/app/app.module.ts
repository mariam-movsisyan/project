import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegistrationComponent } from './components/registration/registration.component';
import { CreateProjectComponent } from './components/projects/create-project/create-project.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/projects/project/project.component';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { VacanciesComponent } from './components/vacancies/vacancies.component';
import { CreateVacanciesComponent } from './components/vacancies/create-vacancies/create-vacancies.component';
import { VacanciesDetailComponent } from './components/vacancies/vacancies-detail/vacancies-detail.component';
import { CreateTrainingsComponent } from './components/trainings/create-trainings/create-trainings.component';
import { TrainingsDetailComponent } from './components/trainings/trainings-detail/trainings-detail.component';
import { MainInterceptor } from './interceptors/main.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainLayoutComponent,
    DashboardComponent,
    ProfileComponent,
    RegistrationComponent,
    CreateProjectComponent,
    ProjectsComponent,
    ProjectComponent,
    TrainingsComponent,
    VacanciesComponent,
    CreateVacanciesComponent,
    VacanciesDetailComponent,
    CreateTrainingsComponent,
    TrainingsDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MainInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
