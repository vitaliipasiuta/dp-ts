import IShape from "./IShape";

class Circle implements IShape {

  draw (): void {
    console.log("Inside Circle:draw() method");
  }

}

export default Circle;
