import {IShape} from "./IShape";

class Square implements IShape {

  constructor () {}

  draw (): void {
    console.log("Inside Square:draw() method");
  }

}

export {
  Square
}