import { Component } from '@angular/core';
import { DataService } from './Services/data.service';

@Component({
    selector: 'root',
    template: `<div class="container">
        <nav>
            <a routerLink="/list">List</a>
            <br/>
            <a routerLink="/lazy">Lazy</a>
        </nav>
        <hr/>
        <router-outlet></router-outlet>
    </div>`,
    providers: [DataService]
})
export class RootComponent {
}