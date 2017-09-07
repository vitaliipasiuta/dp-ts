class BookSingleton {

  private author: string = "Chack Palanik";
  private title: string = "Fight Club";

  private static book: BookSingleton = null;
  private static isLoanedOut: boolean = false;

  static borrowBook (): BookSingleton {
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

  returnBook (): void {
    BookSingleton.isLoanedOut = false;
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