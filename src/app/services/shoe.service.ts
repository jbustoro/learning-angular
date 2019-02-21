import { Injectable } from "@angular/core";
import { Shoe } from "../models/shoe";

@Injectable()
export class ShoeService {
  public shoes: Array<Shoe>;

  constructor() {
    this.shoes = [
      new Shoe("Gravis", "lx40", "black", 60, true),
      new Shoe("Adidas", "lx03", "gray", 39, true),
      new Shoe("Vans", "lx99", "white", 45, true),
      new Shoe("Converse", "lx88", "white", 999, true),
      new Shoe("HUF", "lx54", "red", 50, false)
    ];
  }

  getText() {
    return "Hello World from a service!";
  }

  getShoes(): Array<Shoe> {
    return this.shoes;
  }
}
