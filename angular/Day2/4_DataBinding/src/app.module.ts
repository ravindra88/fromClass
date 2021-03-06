import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { RootComponent } from "./root.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [RootComponent],
    bootstrap: [RootComponent]
})
export class AppModule { }