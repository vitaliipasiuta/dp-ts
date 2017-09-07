import IShape from "./IShape";

class Rectangle implements IShape {

  public draw(): void {
    console.log("Rectangle:draw()");
  }
}

export default Rectangle;
