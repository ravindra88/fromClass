import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms'
import { RouterModule } from "@angular/router";

import { RootComponent } from "./app.component";
import { ListComponent } from './ListComponent/list.component';
import { QuoteComponent } from './QuoteComponent/quote.component';

import { routes } from './app.routes';

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
    declarations: [RootComponent, ListComponent, QuoteComponent],
    bootstrap: [RootComponent]
})
export class AppModule { }