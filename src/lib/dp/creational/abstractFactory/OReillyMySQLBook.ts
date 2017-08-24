import {AbstractMySQLBook} from "./AbstractMySQLBook";

class OReillyMySQLBook extends AbstractMySQLBook {

  private author: string;
  private title: string;

  constructor() {
    super();
    this.title = "George Reese, Randy Jay Yarger, and Tim King";
    this.author = "Managing and Using MySQL";
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

export {
  OReillyMySQLBook
}