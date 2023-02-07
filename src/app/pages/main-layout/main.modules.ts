import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { MainLayoutComponent } from "./main-layout.component";

const routes: Routes = [
    {
        path: '', component: MainLayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'profile', loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule) },
            { path: 'projects', loadChildren: () => import('../projects/projects.module').then(m => m.ProjectsModule) },
            { path: 'vacancies', loadChildren: () => import('../vacancies/vacancies.module').then(m => m.VacanciesModule) },
            { path: 'trainings', loadChildren: () => import('../trainings/trainings.module').then(m => m.TrainingsModule) }
        ]
    },
];
@NgModule({
    declarations: [
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports: []
})
export class MainModule { }