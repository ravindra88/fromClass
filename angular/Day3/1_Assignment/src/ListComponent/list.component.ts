import { Component, Input } from '@angular/core';

@Component({
    selector: 'lcomp',
    templateUrl: 'list.component.html'
})

export class ListComponent {
    @Input() personList: Array<string>;

    constructor() { }
}