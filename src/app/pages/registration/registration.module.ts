import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { RegistrationComponent } from "./registration.component";

const routes: Routes = [
    { path: '', component: RegistrationComponent },
];
@NgModule({
    declarations: [
        RegistrationComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports: []
})
export class RegistrationModule { }