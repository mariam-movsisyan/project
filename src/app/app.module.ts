import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewOrdersComponent } from './components/new-orders/new-orders.component';
import { OrdersComponent } from './components/orders/orders.component';
import {HttpClientModule} from '@angular/common/http';
import { RegistrationComponent } from './components/registration/registration.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { VacanciesComponent } from './components/vacancies/vacancies.component';
import { CreateVacanciesComponent } from './components/create-vacancies/create-vacancies.component';
import { VacanciesDetailComponent } from './components/vacancies-detail/vacancies-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainLayoutComponent,
    DashboardComponent,
    ProfileComponent,
    NewOrdersComponent,
    OrdersComponent,
    RegistrationComponent,
    CreateProjectComponent,
    ProjectsComponent,
    ProjectComponent,
    TrainingsComponent,
    VacanciesComponent,
    CreateVacanciesComponent,
    VacanciesDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
