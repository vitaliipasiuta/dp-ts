import IShape from "./IShape";

class Circle implements IShape {

  public draw(): void {
    console.log("Circle:draw()");
  }
}

export default Circle;
