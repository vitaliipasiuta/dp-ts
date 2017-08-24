import {BookListIterator} from "./BookListIterator";
import {BookList} from "./BookList";
import {Book} from "./Book";

class BookListReverseIterator extends BookListIterator {

  constructor (bookList: BookList) {
    super(bookList);
    this.bookList = bookList;
    this.currentBook = this.bookList.getBookCount() + 1;
  }

  public getNextBook(): Book | null {
    if (this.hasNextBook()) {
      return this.bookList.getBook(--this.currentBook)
    }
    return null;
  }

  public hasNextBook(): boolean {
    return this.currentBook > 1;
  }

}

export {
  BookListReverseIterator
}