import IStrategy from "./IStrategy";
import Book from "./Book";

class StrategyStar implements IStrategy {

  public showTitle(book: Book): string {
    const title = book.getTitle();
    return title.replace(" ", "*");
  }

}

export default StrategyStar;
