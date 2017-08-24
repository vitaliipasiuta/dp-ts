import {PizzaBuilder} from "./PizzaBuilder"

class SpicyPizzaBuilder extends PizzaBuilder {

  buildDough(): void {
    this.pizza.setDough("pan baked");
  }

  buildSauce(): void {
    this.pizza.setSauce("hot");
  }

  buildTopping(): void {
    this.pizza.setTopping("pepperoni+salami");
  }

}

export {
  SpicyPizzaBuilder
}

