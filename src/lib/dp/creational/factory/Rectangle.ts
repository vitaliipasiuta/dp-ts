import IShape from "./IShape";

class Rectangle implements IShape {

  draw (): void {
    console.log("Inside Rectangle:draw() method");
  }

}

export default Rectangle;