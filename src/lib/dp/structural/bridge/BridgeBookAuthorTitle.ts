import BridgeBook from "./BridgeBook";

class BridgeBookAuthorTitle extends BridgeBook {

  public showAuthorTitle(): string {
    return `${this.showAuthor()}'s ${this.showTitle()}`;
  }

}

export default BridgeBookAuthorTitle;
