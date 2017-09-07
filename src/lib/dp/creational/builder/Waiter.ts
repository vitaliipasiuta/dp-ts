import PizzaBuilder from "./PizzaBuilder"
import Pizza from "./Pizza";

class Waiter {

  private pizzaBuilder: PizzaBuilder;

  setPizzaBuilder(pb: PizzaBuilder): void {
    this.pizzaBuilder = pb;
  }

  getPizza(): Pizza {
    return this.pizzaBuilder.getPizza();
  }

  constructPizza (): void {
    this.pizzaBuilder.createNewPizzaProduct();
    this.pizzaBuilder.buildDough();
    this.pizzaBuilder.buildSauce();
    this.pizzaBuilder.buildTopping();
  }

}

export default Waiter;
