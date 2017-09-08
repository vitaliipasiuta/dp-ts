import ShapeFactory from "./ShapeFactory";
import IExample from "../../../models/IExample";

class FactoryExample implements IExample {

  public start(): void {
    console.log("\nSTART TEST FACTORY PATTER\n");

    const shapeFactory = new ShapeFactory();

    //get an object of Circle and call its draw method.
    const shape1 = shapeFactory.getShape("circle");

    //call draw method of Circle
    shape1.draw();

    //get an object of Rectangle and call its draw method.
    const shape2 = shapeFactory.getShape("rectangle");

    //call draw method of Rectangle
    shape2.draw();

    //get an object of Square and call its draw method.
    const shape3 = shapeFactory.getShape("square");

    //call draw method of circle
    shape3.draw();

    console.log("\nEND TEST FACTORY PATTER\n");
  }

}

export default FactoryExample;

