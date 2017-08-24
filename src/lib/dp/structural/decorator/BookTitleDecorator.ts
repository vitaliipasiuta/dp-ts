import {Book} from "./Book";

class BookTitleDecorator {

  public book: Book;
  public title: string;

  constructor (book: Book) {
    this.book = book;
    this.resetTitle();
  }

  public resetTitle (): void {
    this.title = this.book.getTitle();
  }

  public showTitle(): string {
    return this.title;
  }

}

export {
  BookTitleDecorator
}