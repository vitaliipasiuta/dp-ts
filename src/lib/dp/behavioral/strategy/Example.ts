import Book from "./Book";
import StrategyContext from "./StrategyContext";

class Example {

  static start(): void {
    console.log("\nSTART TEST STRATEGY PATTER \n");

    const book: Book = new Book("Fight club", "Chuck");
    const strategyContextC = new StrategyContext("C");
    const strategyContextE = new StrategyContext("E");
    const strategyContextS = new StrategyContext("S");

    console.log('test 1 - show name context C');
    console.log(strategyContextC.showBookTitle(book));
    console.log('');

    console.log('test 2 - show name context E');
    console.log(strategyContextE.showBookTitle(book));
    console.log('');

    console.log('test 3 - show name context S');
    console.log(strategyContextS.showBookTitle(book));
    console.log('');

    console.log("\nEND TEST STRATEGY PATTER \n");
  }

}

export {
  Example
};
