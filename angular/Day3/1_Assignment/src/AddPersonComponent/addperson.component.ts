import { Component, AfterViewInit } from "@angular/core";

@Component({
    selector: 'addperson',
    templateUrl: 'addperson.component.html'
})
export class AddPersonComponent {
    pname: string;
    pList: Array<string>;

    constructor() {
        this.pname = "";
        this.pList = [];
    }

    add() {
        this.pList.push(this.pname);
    }
}