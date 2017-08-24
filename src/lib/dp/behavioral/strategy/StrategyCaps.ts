import {IStrategy} from "./IStrategy";
import {Book} from "./Book";

class StrategyCaps implements IStrategy{

  public showTitle(book: Book): string {
    const title = book.getTitle();
    return title.toUpperCase();
  }

}

export {
  StrategyCaps
}