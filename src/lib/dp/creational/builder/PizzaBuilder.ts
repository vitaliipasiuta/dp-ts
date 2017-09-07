import Pizza from "./Pizza";

abstract class PizzaBuilder {

  protected pizza: Pizza;

  getPizza(): Pizza {
    return this.pizza;
  }

  createNewPizzaProduct(): void {
    this.pizza = new Pizza;
  }

  abstract buildDough(): void;
  abstract buildSauce(): void;
  abstract buildTopping(): void;

}

export default PizzaBuilder;
