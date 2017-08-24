import {IShape} from "./IShape";
import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";
import {Square} from "./Square";

class ShapeFactory {

  constructor () {}

  getShape (shapeType: string): IShape {
    if (!shapeType) return null;
    if (shapeType === "circle") return new Circle();
    if (shapeType === "rectangle") return new Rectangle();
    if (shapeType === "square") return new Square();
    return null
  }

}

export {
  ShapeFactory
}