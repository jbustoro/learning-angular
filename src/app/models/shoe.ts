export class Shoe {
  // public brand: string;
  // public model: string;
  // public color: string;
  // public price: number;
  //
  // constructor(brand, model, color, price) {
  //   this.brand;
  //   this.model;
  //   this.color;
  //   this.price;
  // }

  constructor(
    public brand: string,
    public model: string,
    public color: string,
    public price: number,
    public stock: boolean
  ) {}
}
