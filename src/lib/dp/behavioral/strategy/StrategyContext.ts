import {StrategyCaps} from "./StrategyCaps";
import {StrategyExclaim} from "./StrategyExclaim";
import {StrategyStar} from "./StrategyStar";
import {Book} from "./Book";

class StrategyContext {

  private strategy = null;

  constructor (strategy: string) {
    switch (strategy) {
      case "C":
        this.strategy = new StrategyCaps();
        break;
      case "E":
        this.strategy = new StrategyExclaim();
        break;
      case "S":
        this.strategy = new StrategyStar();
        break;
    }
  }

  public showBookTitle(book: Book) {
    return this.strategy.showTitle(book);
  }
}

export {
  StrategyContext
}