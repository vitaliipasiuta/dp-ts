import Book from "./Book";
import BookTitleStateStars from "./BookTitleStateStars";
import BookTitleStateExclaim from "./BookTitleStateExclaim";

class BookContext {

  private book: Book = null;
  private bookTitleState = null;

  constructor (book: Book) {
    this.book = book;
    this.setTitleState(new BookTitleStateStars());
  }

  public getBookTitle(): string {
    return this.bookTitleState.showTitle(this);
  }

  public getBook(): Book {
    return this.book;
  }

  public setTitleState(title: BookTitleStateStars | BookTitleStateExclaim): void {
    this.bookTitleState = title;
  }

}

export default BookContext;
