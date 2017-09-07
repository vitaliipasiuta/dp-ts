import BridgeBookImp from "./BridgeBookImp";

class BridgeBookStarsImp extends BridgeBookImp {

  public showTitle (authorIn):string {
    return authorIn.replace(" ", "*");
  }

  public showAuthor (titleIn):string {
    return titleIn.replace(" ", "*");
  }

}

export default BridgeBookStarsImp;
