import BookList from "./BookList";
import Book from "./Book";

class BookListIterator {

  protected bookList: BookList;
  protected currentBook: number = -1;

  constructor (bookList: BookList) {
    this.bookList = bookList;
  };

  public getCurrentBook(): Book | null {
    if ((this.currentBook > 0) && (this.bookList.getBookCount() >= this.currentBook)) {
      return this.bookList.getBook(++this.currentBook);
    }
    return null;
  }

  public getNextBook(): Book | null {
    if (this.hasNextBook()) {
      return this.bookList.getBook(++this.currentBook)
    }
    return null;
  }

  public hasNextBook(): boolean {
    return this.bookList.getBookCount() > this.currentBook;
  }

}

export default BookListIterator;
