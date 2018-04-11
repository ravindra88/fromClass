import { Component } from '@angular/core';
import { DataService } from './Services/data.service';
import { Post } from './Models/post';

@Component({
    selector: 'root',
    templateUrl: 'app.component.html',
    providers: [DataService]
})
export class RootComponent {
    posts: Array<Post> = [];

    constructor(private dService: DataService) { }

    ngOnInit() {
        this.dService.getPosts().subscribe(r => this.posts.push(r));
    }
}