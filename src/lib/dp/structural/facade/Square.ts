import IShape from "./IShape";

class Square implements IShape {

  public draw(): void {
    console.log("Square:draw()");
  }
}

export default Square;
