import BridgeBookImp from "./BridgeBookImp";

class BridgeBookCapsImp extends BridgeBookImp {

  public showTitle (authorIn):string {
    return authorIn.toUpperCase();
  }

  public showAuthor (titleIn):string {
    return titleIn.toUpperCase();
  }

}

export default BridgeBookCapsImp;
