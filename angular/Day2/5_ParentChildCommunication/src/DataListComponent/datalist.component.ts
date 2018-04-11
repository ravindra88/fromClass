import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'dlcomp',
    templateUrl: 'datalist.component.html'
})

export class DataListComponent implements OnInit {
    @Input() personList: Array<string>;
    selectedPerson: string;

    constructor() { }

    ngOnInit() {
    }

    doClick(e: Event, sPerson: string) {
        e.preventDefault();
        this.selectedPerson = sPerson;
    }
}

// import { Component, OnInit } from '@angular/core';

// @Component({
//     selector: 'dlcomp',
//     templateUrl: 'datalist.component.html',
//     inputs: ['personList']
// })

// export class DataListComponent implements OnInit {
//     personList: Array<string>;
//     selectedPerson: string;

//     constructor() { }

//     ngOnInit() {
//     }

//     doClick(e: Event, sPerson: string) {
//         e.preventDefault();
//         this.selectedPerson = sPerson;
//     }
// }