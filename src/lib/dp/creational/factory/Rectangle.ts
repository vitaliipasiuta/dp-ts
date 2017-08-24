import {IShape} from "./IShape";

class Rectangle implements IShape {

  constructor () {}

  draw (): void {
    console.log("Inside Rectangle:draw() method");
  }

}

export {
  Rectangle
}