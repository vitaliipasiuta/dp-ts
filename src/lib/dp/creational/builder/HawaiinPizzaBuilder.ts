import {PizzaBuilder} from "./PizzaBuilder"

class HawaiinPizzaBuilder extends PizzaBuilder {

  buildDough(): void {
    this.pizza.setDough("cross")
  }

  buildSauce(): void {
    this.pizza.setSauce("mild");
  }

  buildTopping(): void {
    this.pizza.setTopping("ham+pineapple");
  }

}

export {
  HawaiinPizzaBuilder
}