import BookSingleton from "./BookSingleton";

class BookBorrower {

  private borrowedBook: any;
  private haveBook: boolean = false;

  constructor() { }

  getAuthorAndTitle (): string {
    return this.haveBook ? this.borrowedBook.getAuthorAndTitle() : "I don't have the book";
  }

  borrowBook (): void {
    this.borrowedBook = BookSingleton.borrowBook();
    this.haveBook = this.borrowedBook !== null;
  }

  returnBook () {
    this.borrowedBook.returnBook(this.borrowedBook);
  }


}

export {
  BookBorrower
}