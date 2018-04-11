import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../Models/post";

@Injectable()
export class DataService {
    private url = "https://jsonplaceholder.typicode.com/posts";

    constructor(private http: Http) { }

    getPosts(): Observable<Post> {
        return this.http.get(this.url).map((res) => {
            return res.json();
        });
    }
}