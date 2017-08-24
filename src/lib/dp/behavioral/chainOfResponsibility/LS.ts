import {IImage} from "./IImage";

class LS implements IImage {

  public process(): string {
    return "LS";
  }

}

export {
  LS
}