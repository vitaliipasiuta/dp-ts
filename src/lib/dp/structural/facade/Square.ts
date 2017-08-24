import {IShape} from "./IShape";

class Square implements IShape {

  constructor () { }

  public draw(): void {
    // tslint:disable-next-line:no-console
    console.log("Square:draw()");
  }
}

export {
  Square
}