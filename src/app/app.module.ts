import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { VacanciesComponent } from './components/vacancies/vacancies.component';
import { CreateVacanciesComponent } from './components/vacancies/create-vacancies/create-vacancies.component';
import { VacanciesDetailComponent } from './components/vacancies/vacancies-detail/vacancies-detail.component';
import { CreateTrainingsComponent } from './components/trainings/create-trainings/create-trainings.component';
import { TrainingsDetailComponent } from './components/trainings/trainings-detail/trainings-detail.component';
import { MainInterceptor } from './interceptors/main.interceptor';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainLayoutComponent,
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
    SharedModule

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
