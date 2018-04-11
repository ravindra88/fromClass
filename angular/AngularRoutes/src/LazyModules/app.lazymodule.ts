import { NgModule } from "@angular/core";

import { LazyComponent } from "./app.lazycomponent";

import { routing } from "./app.lazyrouting";

@NgModule({
  imports: [routing],
  declarations: [LazyComponent]
})
export class LazyModule {}
