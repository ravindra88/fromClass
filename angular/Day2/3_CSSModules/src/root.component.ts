import { Component } from "@angular/core";

@Component({
    selector: 'root',
    template: ` <div class="container">
                    <h1>Root Component Loaded</h1>
                    <cone>Component One Loading....</cone>
                    <ctwo>Component Two Loading....</ctwo>
                </div>`
})
export class RootComponent { }