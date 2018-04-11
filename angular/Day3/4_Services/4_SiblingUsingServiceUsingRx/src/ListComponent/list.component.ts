import { Component, Inject } from '@angular/core';
import { DataService } from '../Services/data.service';
import { Author } from '../Models/app.author';


@Component({
    selector: 'alist',
    templateUrl: 'list.component.html',
    styles: [require('./list.component.css').toString()]
})
export class ListComponent {
    list: Array<Author>;
    selectedAuthor: Author;

    constructor(private dService:DataService) { }

    ngOnInit() {
        this.list = this.dService.Authors;
    }

    selectAuthor(a: Author) {
        this.dService.SelectedAuthor = a;
        this.selectedAuthor = this.dService.SelectedAuthor;        
    }

    isSelected(a: Author) {
        return this.selectedAuthor === a;
    }
}