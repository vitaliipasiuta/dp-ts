import {BookTitleDecorator} from "./BookTitleDecorator";
import {Book} from "./Book";

class BookTitleExclaimDecorator extends BookTitleDecorator{

  private btd: BookTitleDecorator;

  constructor (book: Book, btd: BookTitleDecorator) {
    super(book);
    this.btd = btd;
  }

  public exclaimTitle(): void {
    this.btd.title = "!" + this.btd.title + "!";
  }

}

export {
  BookTitleExclaimDecorator
}