import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AddPersonComponent } from "./AddPersonComponent/addperson.component";
import { ListComponent } from "./ListComponent/list.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AddPersonComponent, ListComponent],
    bootstrap: [AddPersonComponent]
})
export class AppModule { }