import { Component } from '@angular/core';
import { DataService } from './Services/data.service';

@Component({
    selector: 'root',
    template: `<div class="container">
        <alist></alist>
        <squote></squote>
    </div>`,
    providers: [DataService]
})
export class RootComponent {
}