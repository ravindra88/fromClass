import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../Services/data.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'squote',
    templateUrl: 'quote.component.html',
    styles: [require('./quote.component.css').toString()]
})

export class QuoteComponent implements OnInit, OnDestroy {
    
    private s: Subscription;
    quote: string;

    constructor(private dService: DataService) { }

    ngOnInit() {
        this.s = this.dService.selectedAuthorChanged.subscribe(() => {
            if (this.dService.SelectedAuthor)
                this.quote = this.dService.SelectedAuthor.quote;
        });
    }

    ngOnDestroy(): void {
        this.s.unsubscribe();
    }
}