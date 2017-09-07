import BridgeBookStarsImp from "./BridgeBookStarsImp";
import BridgeBookCapsImp from "./BridgeBookCapsImp";

abstract class BridgeBook {

  private bbAuthor: string;
  private bbTitle: string;
  private bbImp: BridgeBookCapsImp | BridgeBookStarsImp;

  constructor (authorIn: string, titleIn: string, choiceIn: string) {
    this.bbAuthor = authorIn;
    this.bbTitle = titleIn;
    this.bbImp = choiceIn == "STARS" ? new BridgeBookStarsImp() : new BridgeBookCapsImp();
  }

  public showAuthor(): string {
    return this.bbImp.showAuthor(this.bbAuthor);
  }

  public showTitle(): string {
    return this.bbImp.showTitle(this.bbTitle);
  }

}

export default BridgeBook;