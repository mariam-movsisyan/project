import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VacanciesDetailResolver } from "src/app/resolver/vacancies-detail.resolver";
import { VacanciesResolver } from "src/app/resolver/vacancies.resolver";
import { SharedModule } from "src/app/shared/shared.module";
import { CreateVacanciesComponent } from "./create-vacancies/create-vacancies.component";
import { VacanciesDetailComponent } from "./vacancies-detail/vacancies-detail.component";
import { VacanciesComponent } from "./vacancies.component";

const routes: Routes = [
    { path: '', component: VacanciesComponent, resolve: { vacancies: VacanciesResolver } },
    { path: 'create-vacancies', component: CreateVacanciesComponent },
    { path: 'vacancies-detail/:id', component: VacanciesDetailComponent, resolve: { vacanciesDetail: VacanciesDetailResolver } },
];
@NgModule({
    declarations: [
        VacanciesComponent,
        CreateVacanciesComponent,
        VacanciesComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports: []
})
export class VacanciesModule { }