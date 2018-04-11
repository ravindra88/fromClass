import { Routes } from "@angular/router";

import { ListComponent } from "./ListComponent/list.component";
import { QuoteComponent } from "./QuoteComponent/quote.component";

export const routes: Routes = [
  { path: "list", component: ListComponent },
  { path: "quote", component: QuoteComponent },
  { path: "quote/:name", component: QuoteComponent },
  { path: "lazy", loadChildren: "./LazyModules/app.lazymodule#LazyModule" }
];
