import { Routes, RouterModule } from "@angular/router";
import { LazyComponent } from "./app.lazycomponent";
import { ModuleWithProviders } from "@angular/core";

export const routes: Routes = [{ path: "", component: LazyComponent }];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
