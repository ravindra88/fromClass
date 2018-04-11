import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { RootComponent } from "./root.component";
import { ListComponent } from "./ListComponent/list.component";
import { DataListComponent } from "./DataListComponent/datalist.component";
import { CounterComponent } from "./CounterComponent/counter.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [RootComponent, ListComponent, DataListComponent, CounterComponent],
    bootstrap: [RootComponent]
})
export class AppModule { }