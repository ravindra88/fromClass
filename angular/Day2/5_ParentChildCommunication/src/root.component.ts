import { Component, ViewChild, ViewChildren } from "@angular/core";
import { CounterComponent } from "./CounterComponent/counter.component";

@Component({
    selector: 'root',
    template: ` <div class="container">
                    <h2 class="text-danger">{{message}}</h2>
                    <counter #c1 (onMax)=maxedOut($event)></counter>
                    <br/>
                    <br/>
                    <button class="btn btn-danger btn-block" (click)=c1.reset()>Parent Reset</button>
                    <button class="btn btn-danger btn-block" (click)=p_reset(c1)>Parent Reset</button>
                    
                    <!-- <counter></counter>
                    <counter [interval]=10></counter> -->

                    <!-- <lcomp></lcomp> -->

                    <!-- <dlcomp [personList]=pList></dlcomp> -->
                </div>`
})
export class RootComponent {
    pList: Array<string>;
    message: string;

    @ViewChild(CounterComponent)
    cnt: CounterComponent;

    // @ViewChildren(CounterComponent)
    // cntarr: Array<CounterComponent>;

    ngOnInit() {
        this.pList = ["Manish", "Ramakant", "Varun", "Rohit", "Subodh"];
    }

    ngAfterViewInit() {
        this.cnt.interval = 10;
    }

    p_reset(c: CounterComponent) {
        c.reset();
    }

    maxedOut(flag: boolean) {
        if (flag)
            this.message = "Max Click Reached, click reset to continue...";
        else
            this.message = "";
    }
}