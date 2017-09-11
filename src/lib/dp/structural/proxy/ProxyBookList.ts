import BookList from "./BookList";
import Book from "./Book";

class ProxyBookList {

  private bookList: BookList = null;

  public getBookCount(): number {
    if (this.bookList === null) {
      this.makeBookList();
    }

    return this.bookList.getBookCount();
  }

  public addBook(book: Book): number {
    if (this.bookList === null) {
      this.makeBookList();
    }

    return this.bookList.addBook(book);
  }

  public getBook(bookNum: number): Book {
    if (this.bookList === null) {
      this.makeBookList();
    }

    return this.bookList.getBook(bookNum);
  }

  public removeBook(book: Book): number {
    if (this.bookList === null) {
      this.makeBookList();
    }

    return this.bookList.removeBook(book);
  }

  public makeBookList() {
    this.bookList = new BookList();
  }


}

export default ProxyBookList;
