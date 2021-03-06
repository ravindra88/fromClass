import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { OneComponent } from "./OneComponent/one.component";
import { TwoComponent } from "./TwoComponent/two.component";
import { RootComponent } from "./root.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [RootComponent, OneComponent, TwoComponent],
    bootstrap: [RootComponent]
})
export class AppModule { }