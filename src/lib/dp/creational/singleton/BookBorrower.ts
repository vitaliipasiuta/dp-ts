import BookSingleton from "./BookSingleton";

class BookBorrower {

  private borrowedBook: any;
  private haveBook: boolean = false;

  getAuthorAndTitle (): string {
    return this.haveBook ? this.borrowedBook.getAuthorAndTitle() : "I don't have the book";
  }

  borrowBook (): void {
    this.borrowedBook = BookSingleton.borrowBook();
    this.haveBook = this.borrowedBook !== null;
  }

  returnBook (): void {
    this.borrowedBook.returnBook();
  }


}

export default BookBorrower;
