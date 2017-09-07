class Book {

  private author: string;
  private title: string;

  constructor (title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  public getAuthor(): string {
    return this.author;
  }

  public getTitle(): string {
    return this.title;
  }

  public getTitleAndAuthor(): string {
    return `${this.getTitle()} by ${this.getAuthor()}`
  }

}

export default Book;
