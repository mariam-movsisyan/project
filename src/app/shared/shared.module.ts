import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [],
    imports: [
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule,
        FormsModule
    ]
})
export class SharedModule { }