import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { OneComponent } from "./one.component";
import { TwoComponent } from "./two.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [OneComponent, TwoComponent],
    bootstrap: [OneComponent, TwoComponent]
})
export class AppModule { }