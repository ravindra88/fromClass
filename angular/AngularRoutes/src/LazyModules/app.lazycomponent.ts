import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'selector-name',
    template: `<h2>Lazy Component Loaded</h2>`
})

export class LazyComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}