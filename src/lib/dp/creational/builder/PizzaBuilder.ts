import {Pizza} from "./Pizza";

abstract class PizzaBuilder {

  protected pizza: Pizza;

  constructor () {}

  getPizza (): Pizza {
    return this.pizza;
  }

  createNewPizzaProduct() {
    this.pizza = new Pizza;
  }

  abstract buildDough(): void;
  abstract buildSauce(): void;
  abstract buildTopping(): void;

}

export {
  PizzaBuilder
}