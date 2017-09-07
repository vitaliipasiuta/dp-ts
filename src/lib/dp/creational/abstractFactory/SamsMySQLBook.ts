import AbstractMySQLBook from "./AbstractMySQLBook";

class SamsMySQLBook extends AbstractMySQLBook {

  private author: string;
  private title: string;

  constructor() {
    super();
    this.title = "Paul Dubois";
    this.author = "MySQL, 3rd Edition";
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

export default SamsMySQLBook;
