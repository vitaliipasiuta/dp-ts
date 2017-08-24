
class BookSingleton {

  private author: string = "Chack Palanik";
  private title: string = "Fight Club";
  private pattern: string = "creational/singleton";

  private static book: BookSingleton = null;
  private static isLoanedOut: boolean = false;

  constructor() { }

  static borrowBook () {
    if (this.isLoanedOut === false) {
      if (this.book === null) {
        this.book = new BookSingleton();
      }
      this.isLoanedOut = true;
      return this.book;
    } else {
      return null;
    }
  }

  returnBook (book: BookSingleton) {
    BookSingleton.isLoanedOut = false;
  }

  getPattern (): string {
    return this.pattern;
  }

  getTitle (): string {
    return this.title;
  }

  getAuthor (): string {
    return this.author;
  }

  getAuthorAndTitle (): string {
    return `${this.getTitle()} by ${this.getAuthor()}`;
  }


}

export default BookSingleton;