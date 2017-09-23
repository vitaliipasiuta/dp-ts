interface Cashbox {
  getPrice()
}

class Coffee implements Cashbox {
  private price = 1;

  public setPrice(price: number) {
    this.price = price;
  }

  public getPrice() {
    return this.price;
  }
}

class CoffeeWithMilk implements Cashbox {
  private coffee: Coffee;
  private milkPrice = 0.5;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
    this.coffee.setPrice(this.coffee.getPrice() + this.milkPrice)
  }

  public getPrice() {
    return this.coffee.getPrice();
  }

}

let coffee = new Coffee();

console.log('Default coffee price: $', coffee.getPrice());

let coffeeWM = new CoffeeWithMilk(new Coffee());

console.log('Coffee with milk price: $', coffeeWM.getPrice());
