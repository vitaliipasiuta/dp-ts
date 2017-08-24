import {IShape} from "./IShape";

class Circle implements IShape {

  constructor () { }

  public draw(): void {
    // tslint:disable-next-line:no-console
    console.log("Circle:draw()");
  }
}

export {
  Circle
}