import IStrategy from "./IStrategy";
import Book from "./Book";

class StrategyExclaim implements IStrategy {

  public showTitle(book: Book): string {
    const title = book.getTitle();
    return title.replace(" ", "!");
  }

}

export default StrategyExclaim;
