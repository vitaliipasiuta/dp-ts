import {Circle} from "./Circle";
import {Square} from "./Square";
import {Rectangle} from "./Rectangle";
import {IShape} from "./IShape";

class ShapeFacade {

  private circle: IShape;
  private square: IShape;
  private rectangle: IShape;

  constructor () {
    this.circle = new Circle();
    this.square = new Square();
    this.rectangle = new Rectangle();
  }

  public drawCircle(): void {
    this.circle.draw();
  }

  public drawSquare(): void {
    this.square.draw();
  }

  public drawRectangle(): void {
    this.rectangle.draw();
  }

}

export {
  ShapeFacade
}