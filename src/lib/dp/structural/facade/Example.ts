import {ShapeFacade} from "./ShapeFacade";

class Example {

  constructor() { }

  static start(): void {
    console.log("\nSTART TEST FACADE PATTER \n");

    const shapeFacede = new ShapeFacade();

    shapeFacede.drawCircle();
    shapeFacede.drawRectangle();
    shapeFacede.drawSquare();

    console.log("\nEND TEST FACADE PATTER \n");
  }

}

export {
  Example
};
