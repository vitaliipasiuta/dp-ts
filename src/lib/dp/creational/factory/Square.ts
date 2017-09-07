import IShape from "./IShape";

class Square implements IShape {

  draw (): void {
    console.log("Inside Square:draw() method");
  }

}

export default Square;
