import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RootComponent } from "./root.component";
import { ModelBasedFormComponent } from "./ModelBased/mb.component";
import { TemplatedFormComponent } from "./Templated/tf.component";
import { ReactiveFormComponent } from "./ReactiveForm/rf.component";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [RootComponent,ReactiveFormComponent, ModelBasedFormComponent, TemplatedFormComponent],
    bootstrap: [RootComponent]
})
export class AppModule { }