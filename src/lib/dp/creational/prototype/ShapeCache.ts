import {Shape} from "./Shape";
import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";
import {Square} from "./Square";

class ShapeCache{

  private static shapeMap: {} = {};

  public static getShape(shapeId: string): Shape {
    const cachedShape: Shape = ShapeCache.shapeMap[shapeId];
    return cachedShape.clone() as Shape;
  }

  public static loadCache(): void {
    const circle: Circle = new Circle();
    circle.setId("first");
    ShapeCache.shapeMap[circle.getId()] = circle;

    const rectangle: Rectangle = new Rectangle();
    rectangle.setId("second");
    ShapeCache.shapeMap[rectangle.getId()] = rectangle;

    const square: Square = new Square();
    square.setId("third");
    ShapeCache.shapeMap[square.getId()] = square;
  }

}

export {
  ShapeCache
}