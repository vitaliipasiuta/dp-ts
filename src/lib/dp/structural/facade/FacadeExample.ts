import ShapeFacade from "./ShapeFacade";
import IExample from "../../../models/IExample";

class FacadeExample implements IExample {

  public start(): void {
    console.log("\nSTART TEST FACADE PATTER \n");

    const shapeFacade: ShapeFacade = new ShapeFacade();

    shapeFacade.drawCircle();
    shapeFacade.drawRectangle();
    shapeFacade.drawSquare();

    console.log("\nEND TEST FACADE PATTER \n");
  }

}

export default FacadeExample;
