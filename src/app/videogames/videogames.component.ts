import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
  selector: "videogames",
  templateUrl: "./videogames.component.html"
})
export class VideogamesComponent implements OnInit, DoCheck, OnDestroy {
  public title: string;
  public list: string;

  constructor() {
    this.title = "Videogames component";
    this.list = "List of videogames";

    // console.log("Videogame component is loaded.");
  }

  ngOnInit() {
    // console.log("OnInit loaded.");
  }

  ngDoCheck() {
    // console.log("DoCheck loaded.");
  }

  ngOnDestroy() {
    // console.log("OnDestroy loaded");
  }

  chTitle() {
    this.title = "New title";
  }
}
