import AbstractPHPBook from "./AbstractPHPBook";

class OReillyPHPBook extends AbstractPHPBook {

  private author: string;
  private title: string;
  private static oddOrEven: string = "odd";

  constructor() {
    super();
    if (OReillyPHPBook.oddOrEven == "odd") {
      this.title = "Rasmus Lerdorf and Kevin Tatroe";
      this.author = "Programming PHP";
      OReillyPHPBook.oddOrEven = "even";
    } else {
      this.title = "David Sklar and Adam Trachtenberg";
      this.author = "PHP Cookbook";
      OReillyPHPBook.oddOrEven = "odd";
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

export default OReillyPHPBook;
