import BookTitleDecorator from "./BookTitleDecorator";
import Book from "./Book";

class BookTitleStarDecorator extends BookTitleDecorator {

  private btd: BookTitleDecorator;

  constructor (book: Book, btd: BookTitleDecorator) {
    super(book);
    this.btd = btd;
  }

  public starTitle(): void {
    this.btd.title = this.btd.title.replace(" ", "*");
  }

}

export default BookTitleStarDecorator;
