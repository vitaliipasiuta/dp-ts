import {Book} from "./Book";
import {isNumber} from "util";

class BookList {

  private books: Book[] = [];
  private bookCount: number = 0;

  constructor () {}

  public getBookCount(): number {
    return this.bookCount;
  }

  private setBookCount(newCount: number): void {
    this.bookCount = newCount;
  }

  public getBook(bookNumber: number): Book {
    if (isNumber(bookNumber) && (bookNumber <= this.getBookCount())) {
      return this.books[bookNumber];
    } else {
      return null;
    }
  }

  public addBook(book: Book): number {
    this.setBookCount(this.getBookCount() + 1);
    this.books[this.getBookCount()] = book;
    return this.getBookCount();
  }

  public removeBook(book: Book): number {
    let counter: number = 0;
    while(++counter <= this.getBookCount()) {
      if (book.getTitleAndAuthor() == this.books[counter].getTitleAndAuthor()) {
        for (let x = counter; x < this.getBookCount(); x++) {
          this.books[x] = this.books[x + 1];
        }
      }
      this.setBookCount(this.getBookCount() - 1);
    }

    return this.getBookCount();
  }

}

export {
  BookList
}