import { Component, OnInit } from '@angular/core';
import { IPerson } from './person';

@Component({
    selector: 'mb',
    templateUrl: 'mb.component.html'
})

export class ModelBasedFormComponent implements OnInit {
    person: IPerson;

    constructor() { }

    ngOnInit() {
        this.person = {
            firstname: "Manish",
            lastname: "",
            address: {
                city: "",
                zip: 0
            }
        }
    }

    logForm() {
        //Code to send data to service
        console.log(this.person);
    }
}