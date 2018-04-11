import { Component } from "@angular/core";

var styles = require('./two.component.css');

@Component({
    selector: 'ctwo',
    template: `
        <h2 class="text-danger">Component External CSS using StyleUrls</h2>
        <h3 class="${styles.card}">Just for Fun</h3>
        
        `
})
export class TwoComponent { }
