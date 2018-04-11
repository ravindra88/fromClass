// //1. Template Inline Style
// import { Component, ViewEncapsulation } from "@angular/core";

// @Component({
//     selector: 'cone',
//     template: `
//         <style>
//             .card{
//                 border-style: solid;
//                 border-width: 2px;
//                 border-color: red;
//             }
//         </style>

//         <h2 class="text-danger">Template Inline Style</h2>
//         <h3 class="card">Just for Fun</h3>
//         <h3 style="border-style: solid;border-width: 2px;border-color: red;">Just for Fun</h3>`,
//     encapsulation: ViewEncapsulation.Native
// })
// export class OneComponent { }

// //2. Component Inline Style
// import { Component, ViewEncapsulation } from "@angular/core";

// @Component({
//     selector: 'cone',
//     styles: [`
//         .card{
//             border-style: solid;
//             border-width: 2px;
//             border-color: red;
//         }
//     `],
//     template: `
//         <h2 class="text-danger">Component Inline Style</h2>
//         <h3 class="card">Just for Fun</h3>
//         `,
//     encapsulation: ViewEncapsulation.Emulated
// })
// export class OneComponent { }

// //3. Component External CSS using Styles
// import { Component } from "@angular/core";

// @Component({
//     selector: 'cone',
//     styles: [require('./one.component.css').toString()],
//     template: `
//         <h2 class="text-danger">Component External CSS using Styles</h2>
//         <h3 class="card1">Just for Fun</h3>
//         `
// })
// export class OneComponent { }

//4. Component External CSS using StyleUrls
import { Component } from "@angular/core";

@Component({
    selector: 'cone',
    styleUrls: ['./one.component.css'.toString()],
    template: `
        <h2 class="text-danger">Component External CSS using StyleUrls</h2>
        <h3 class="card1">Just for Fun</h3>
        <h3 class="same">Just for Fun</h3>
        `
})
export class OneComponent { }

