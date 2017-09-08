import Circle from "./Circle";
import IExample from "../../../models/IExample";

class PrivateClassDataExample implements IExample {

  public start(): void {
    console.log("\nSTART TEST PRIVATE CLASS DATA PATTER \n");

    const circle: Circle = new Circle(10, "blue", 1);

    console.log(circle.Circumference());
    console.log(circle.Diameter());

    console.log("\nEND TEST PRIVATE CLASS DATA PATTER \n");
  }

}

export default PrivateClassDataExample;
