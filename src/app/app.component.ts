import { Component } from "@angular/core";
import { Configuration } from "./models/configuration";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public title: string;
  public description: string;
  public showVideogames: boolean = false;
  public configuration;

  constructor() {
    this.title = Configuration.title;
    this.description = Configuration.description;
    this.configuration = Configuration;
  }

  hideVideogames(value) {
    this.showVideogames = value;
  }
}
