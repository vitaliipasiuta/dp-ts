import Visitee from "./Visitee";
import Visitor from "./Visitor";

class BookVisitee extends Visitee {

  private author: string;
  private title: string;

  constructor (title: string, author: string) {
    super();
    this.title = title;
    this.author = author;
  }

  public getAuthor(): string {
    return this.author;
  }

  public getTitle(): string {
    return this.title;
  }

  public accept(visitor: Visitor): void {
    visitor.visitBook(this);
  }

}

export default BookVisitee;
