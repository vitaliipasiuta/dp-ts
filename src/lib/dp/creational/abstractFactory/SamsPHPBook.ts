import {AbstractPHPBook} from "./AbstractPHPBook";

class SamsPHPBook extends AbstractPHPBook {

  private author: string;
  private title: string;

  constructor() {
    super();
    const r: boolean = Math.random() >= 0.5;
    if (r) {
      this.title = "George Schlossnagle";
      this.author = "Advanced PHP Programming";
    } else {
      this.title = "Christian Wenz";
      this.author = "PHP Phrasebook";
    }
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
  SamsPHPBook
}