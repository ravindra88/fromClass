import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { RootComponent } from "./root.component";
import { CapitalizePipe } from "./Pipes/capitalize.pipe";
import { ListComponent } from "./ListComponent/list.component";
import { FilterPipe } from "./Pipes/filter.pipe";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [RootComponent, CapitalizePipe, ListComponent, FilterPipe],
    bootstrap: [RootComponent]
})
export class AppModule { }