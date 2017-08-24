import {BridgeBook} from "./BridgeBook";

class BridgeBookTitleAuthor extends BridgeBook {

  public showTitleAuthor(): string {
    return `${this.showTitle()} by ${this.showAuthor()}`;
  }

}

export {
  BridgeBookTitleAuthor
}