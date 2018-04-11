import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
    selector: 'squote',
    templateUrl: 'quote.component.html',
    styles: [require('./quote.component.css').toString()]
})

export class QuoteComponent implements OnInit {
    quote: string;

    constructor(private dService: DataService) { }

    ngOnInit() { }

    get() {
        if (this.dService.SelectedAuthor)
            this.quote = this.dService.SelectedAuthor.quote;
    }
}