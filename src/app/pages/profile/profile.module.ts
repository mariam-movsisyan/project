import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfileResolver } from "src/app/resolver/profile.resolver";
import { SharedModule } from "src/app/shared/shared.module";
import { ProfileComponent } from "./profile.component";

const routes: Routes = [
    { path: '', component: ProfileComponent, resolve: { profile: ProfileResolver }  },
];
@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports: []
})
export class ProfileModule { }