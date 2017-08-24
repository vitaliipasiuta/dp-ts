import {IShape} from "./IShape";

class Circle implements IShape {

  constructor () {}

  draw (): void {
    console.log("Inside Circle:draw() method");
  }

}

export {
  Circle
}