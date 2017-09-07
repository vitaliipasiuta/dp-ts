import Shape from "./Shape";

class Square extends Shape{

  constructor() {
    super();
    this.type = "Square";
  }

  draw(): void {
    console.log("Inside Square::draw() method.");
  }

}

export default Square;
