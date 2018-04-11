import { Component } from "@angular/core";

@Component({
    selector: 'root',
    template: ` <div class="container">
                    <h2>Pipes Demo</h2>
                    
                    <h3>Assignment - Angular Clock</h3>
                    <hr/>
                    <h3 class="text-right">Time is: {{forClock | date: 'mediumTime'}}</h3>
                    <hr/>
                    
                    <lcomp></lcomp>

                    <h3>{{name | capitalize}}</h3>

                    <h3>{{name}}</h3>
                    <h3>{{name | uppercase}}</h3>

                    <h3>{{object}}</h3>
                    <h3>{{object | json}}</h3>

                    <h3>{{now}}</h3>
                    <h3>{{now | date}}</h3>
                    <h3>{{now | date:'MMM/dd/yyyy'}}</h3>
                    <h3>{{now | date:format}}</h3>
                    <button (click)=toggleFormat()>Toggle</button>
                </div>`
})
export class RootComponent {
    forClock: Date;

    constructor() {
        setInterval(() => { this.forClock = new Date(); }, 1000);
    }

    toggle = true;

    get format() { return this.toggle ? 'shortDate' : 'fullDate'; }

    toggleFormat() {
        this.toggle = !this.toggle;
    }

    name = "manish sharma";

    object: Object = {
        foo: 'bar',
        fn: function () {
            console.log(this);
        },
        baz: 'qux',
        nested: {
            xyz: 3,
            numbers: [1, 2, 3, 4, 5]
        }
    };

    now = new Date();
}