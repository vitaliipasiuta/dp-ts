import Shape from "./Shape";

class Circle extends Shape{

  constructor() {
    super();
    this.type = "Circle";
  }

  draw(): void {
    console.log("Inside Circle::draw() method.");
  }

}

export default Circle;
