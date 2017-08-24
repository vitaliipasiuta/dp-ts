import {IShape} from "./IShape";

class Rectangle implements IShape {

  constructor () { }

  public draw(): void {
    // tslint:disable-next-line:no-console
    console.log("Rectangle:draw()");
  }
}

export {
  Rectangle
}