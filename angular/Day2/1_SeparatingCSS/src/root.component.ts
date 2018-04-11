import { Component } from "@angular/core";

@Component({
    selector: 'root',
    template: ` <div class="container">
                    <h1>Root Component Loaded</h1>
                    <cone></cone>
                    <ctwo></ctwo>
                    <hr/>
                    <cone></cone>
                </div>`
})
export class RootComponent { }


// import { Component } from "@angular/core";

// @Component({
//     selector: 'root',
//     template: '<h1>Root Component Loaded</h1><cone></cone><ctwo></ctwo><hr/><cone></cone>'
// })
// export class RootComponent { }
