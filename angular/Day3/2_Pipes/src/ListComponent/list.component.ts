import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'lcomp',
    templateUrl: 'list.component.html'
})

export class ListComponent implements OnInit {
    personList: Array<string>;
    selectedPerson: string;

    constructor() { }

    ngOnInit() {
        this.personList = ["Manish", "Ramakant", "Varun", "Rohit", "Subodh"];
    }

    doClick(e: Event, sPerson: string) {
        e.preventDefault();
        this.selectedPerson = sPerson;
    }
}