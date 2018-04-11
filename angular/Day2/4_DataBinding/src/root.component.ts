import { Component, AfterViewInit } from "@angular/core";

@Component({
    selector: 'root',
    template: ` <div class="container">
                    <h1>Two Way</h1>
                    <input type="text" bindon-ngModel=message>
                    <input type="text" [(ngModel)]=message>
                    <input type="text" [(ngModel)]=city (input)=doUpdate(city)>
                    <h3>From: {{city}}</h3>
                    <hr/>
                    <h1>Event Binding - One Way</h1>
                    <button class="btn btn-success" on-click=doClick()>Click Me!</button>
                    <button class="btn btn-success" (click)=doClick()>Click Me!</button>
                    <button class="btn btn-danger" id="btnJS">Click Me - JS</button>
                    <hr/>
                    <h1>Property Binding - One Way</h1>
                    <h2>Message: {{message}}</h2>
                    <h2 innerHTML={{message}}>Message: </h2>
                    <h2 bind-innerHTML=message>Message: </h2>
                    <h2 [innerHTML]=message>Message: </h2>
                    <h2>Message: <span [innerHTML]=message></span></h2>
                    <input type="text" [value]=message>
                </div>`
})
export class RootComponent implements AfterViewInit {
    message: string;

    constructor() {
        this.message = "Hello World";
    }

    ngAfterViewInit() {
        // var self = this;
        // document.getElementById("btnJS").addEventListener("click", function(){
        //     self.message = "Changed.. " + (new Date()).toLocaleTimeString();
        // });

        document.getElementById("btnJS").addEventListener("click", () => {
            this.message = "Changed.. " + (new Date()).toLocaleTimeString();
        });
    }

    doClick() {
        // alert("Clicked....");
        this.message = "Changed.. " + (new Date()).toLocaleTimeString();
    }

    doUpdate(c: string) {
        this.message = "You are from : " + c;
    }
}