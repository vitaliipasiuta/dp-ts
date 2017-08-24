import {IImage} from "./IImage";

class Processor {

  private static nextID: number = 1;
  private id: number = Processor.nextID++;

  static getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public execute(img: IImage): boolean {
    if (Processor.getRandomInt(0, 3) != 0) {
      console.log("   Processor " + this.id + " is busy");
      return false;
    }
    console.log("Processor " + this.id + " - " + img.process());
    return true;
  }

}

export {
  Processor
}