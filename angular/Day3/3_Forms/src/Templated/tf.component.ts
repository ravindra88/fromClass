import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tf',
    templateUrl: 'tf.component.html'
})

export class TemplatedFormComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    logForm(frm: any) {
        if (frm.valid) {
            // Code to send to Service
            console.log(frm.value);
        }
    }
}