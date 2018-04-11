// //1. Template Inline Style
// import { Component, ViewEncapsulation } from "@angular/core";

// @Component({
//     selector: 'ctwo',
//     template: `
//         <style>
//             .card{
//                 border-style: solid;
//                 border-width: 2px;
//                 border-color: blue;
//             }
//         </style>
    
//         <h2 class="text-danger">Template Inline Style</h2>
//         <h3 class="card">Just for Fun</h3>
//         <h3 style="border-style: solid;border-width: 2px;border-color: blue;">Just for Fun</h3>`,
//     encapsulation: ViewEncapsulation.Native
// })
// export class TwoComponent { }

// //2. Component Inline Style
// import { Component, ViewEncapsulation } from "@angular/core";

// @Component({
//     selector: 'ctwo',
//     styles: [`
//         .card{
//             border-style: solid;
//             border-width: 2px;
//             border-color: blue;
//         }
//     `],
//     template: `
//         <h2 class="text-danger">Component Inline Style</h2>
//         <h3 class="card">Just for Fun</h3>
//         `,
//     encapsulation: ViewEncapsulation.Emulated
// })
// export class TwoComponent { }

// //3. Component External CSS using Styles
// import { Component } from "@angular/core";

// @Component({
//     selector: 'ctwo',
//     styles: [require('./two.component.css').toString()],
//     template: `
//         <h2 class="text-danger">Component External CSS using Styles</h2>
//         <h3 class="card2">Just for Fun</h3>
//         `
// })
// export class TwoComponent { }

//3. Component External CSS using StyleUrls
import { Component } from "@angular/core";

@Component({
    selector: 'ctwo',
    styleUrls: ['./two.component.css'.toString()],
    template: `
        <h2 class="text-danger">Component External CSS using StyleUrls</h2>
        <h3 class="card2">Just for Fun</h3>
        <h3 class="same">Just for Fun</h3>
        `
})
export class TwoComponent { }
