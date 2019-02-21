import { Component, OnInit } from "@angular/core";
import { Shoe } from "../models/shoe";
import { ShoeService } from "../services/shoe.service";

@Component({
  selector: "shoes",
  templateUrl: "./shoes.component.html",
  styleUrls: ["./shoes.component.css"],
  providers: [ShoeService]
})
export class ShoesComponent {
  public title: string = "Shoes component";
  public shoes: Array<Shoe>;
  public brands: string[];
  public color: string;
  public myBrand: string = "My brand";

  constructor(private _shoeService: ShoeService) {
    this.color = "green";
    this.brands = new Array();
  }

  ngOnInit() {
    this.shoes = this._shoeService.getShoes();
    alert(this._shoeService.getText());

    this.getBrands();
  }

  getBrands() {
    this.shoes.map(shoe => {
      if (this.brands.indexOf(shoe.brand) < 0) {
        this.brands.push(shoe.brand);
      }
    });
  }

  getMyBrand() {
    alert(this.myBrand);
  }

  addBrand() {
    this.brands.push(this.myBrand);
  }

  removeBrand(index) {
    // delete this.brands[index];
    this.brands.splice(index, 1);
  }

  onBlur() {
    console.log("Out of the input");
  }

  showWord() {
    alert(this.myBrand);
  }
}
