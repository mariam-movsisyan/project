import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailResolver } from "src/app/resolver/detail.resolver";
import { SharedModule } from "src/app/shared/shared.module";
import { CreateProjectComponent } from "./create-project/create-project.component";
import { ProjectComponent } from "./project/project.component";
import { ProjectsComponent } from "./projects.component";

const routes: Routes = [
    { path: '', component: ProjectsComponent},
    { path: 'create-project', component: CreateProjectComponent },
    { path: 'project/:id', component: ProjectComponent, resolve: { detail: DetailResolver } },
];
@NgModule({
    declarations: [
        ProjectsComponent,
        CreateProjectComponent,
        ProjectComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports: []
})
export class ProjectsModule { }