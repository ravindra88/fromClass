import { Component, OnInit } from "@angular/core";
import { DataService } from "../Services/data.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "squote",
  templateUrl: "quote.component.html",
  styles: [require("./quote.component.css").toString()]
})
export class QuoteComponent implements OnInit {
  quote: string;
  aname: string;

  constructor(private dService: DataService, 
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.map(p => p["name"]).subscribe(n => {
      this.aname = n;
    });
  }

  get() {
    if (this.dService.SelectedAuthor)
      this.quote = this.dService.SelectedAuthor.quote;
  }
}
