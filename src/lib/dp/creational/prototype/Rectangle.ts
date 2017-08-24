import {Shape} from "./Shape";

class Rectangle extends Shape{

  constructor () {
    super();
    this.type = "Rectangle";
  }

  draw(): void {
    console.log("Inside Rectangle::draw() method.");
  }

}

export {
  Rectangle
}