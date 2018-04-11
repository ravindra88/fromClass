import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'rf',
    templateUrl: 'rf.component.html'
})

export class ReactiveFormComponent implements OnInit {
    rForm: FormGroup;
    states = [
        { id: 1, name: "Maharashtra" },
        { id: 2, name: "Andra" },
        { id: 3, name: "MP" }];

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.rForm = this.fb.group({
            firstname: ["", Validators.required],
            lastname: ["", Validators.compose([Validators.required,
            Validators.minLength(2), Validators.maxLength(10)])],
            address: this.fb.group({
                city: ["", Validators.required],
                zip: 0,
                state: ["", Validators.required]
            })
        });
    }

    logForm(frm: FormGroup) {
        if (frm.valid) {
            // Code to send to Service
            console.log(frm.value);
        }
        else {
            console.error("Invalid Form!");
        }
    }
}

// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder } from '@angular/forms';

// @Component({
//     selector: 'rf',
//     templateUrl: 'rf.component.html'
// })

// export class ReactiveFormComponent implements OnInit {
//     rForm: FormGroup;

//     // private fb: FormBuilder;
//     // constructor(fb: FormBuilder) {
//     //     this.fb = fb;
//     // }

//     constructor(private fb: FormBuilder) { }

//     ngOnInit() {

//         this.rForm = this.fb.group({
//             firstname: "Manish",
//             lastname: "",
//             address: this.fb.group({
//                 city: "",
//                 zip: 0
//             })
//         });
//     }

//     logForm(frm: FormGroup) {
//         if (frm.valid) {
//             // Code to send to Service
//             console.log(frm.value);
//         }
//         else {
//             console.error("Invalid Form!");
//         }
//     }
// }

// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';

// @Component({
//     selector: 'rf',
//     templateUrl: 'rf.component.html'
// })

// export class ReactiveFormComponent implements OnInit {
//     rForm: FormGroup;
//     constructor() { }

//     ngOnInit() {
//         this.rForm = new FormGroup({
//             firstname: new FormControl(),
//             lastname: new FormControl(),
//             address: new FormGroup({
//                 city: new FormControl(),
//                 zip: new FormControl(),
//             })
//         });
//     }

//     logForm(frm: FormGroup) {
//         if (frm.valid) {
//             // Code to send to Service
//             console.log(frm.value);
//         }
//         else {
//             console.error("Invalid Form!");
//         }
//     }
// }