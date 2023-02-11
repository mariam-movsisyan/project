import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { CreateTrainingsComponent } from "./create-trainings/create-trainings.component";
import { TrainingsDetailComponent } from "./trainings-detail/trainings-detail.component";
import { TrainingsComponent } from "./trainings.component";
import { TrainingDetailsResolver } from "src/app/resolver/training-details.resolver";
// import { TrainingsResolver } from "src/app/resolver/trainings.resolver";

const routes: Routes = [
    { path: '', component: TrainingsComponent},
    { path: 'create-trainings', component: CreateTrainingsComponent },
    { path: 'trainings-detail/:id', component: TrainingsDetailComponent,  resolve: { trainingDetail: TrainingDetailsResolver } },
];
@NgModule({
    declarations: [
       TrainingsComponent,
       CreateTrainingsComponent,
       TrainingsDetailComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports: []
})
export class TrainingsModule { }