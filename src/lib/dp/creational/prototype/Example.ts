import ShapeCache from "./ShapeCache";
import Shape from "./Shape";

class Example {

  static start(): void {
    console.log("\nSTART TEST PROTOTYPE PATTER \n");

    ShapeCache.loadCache();

    const clonedShape: Shape = ShapeCache.getShape("first");
    console.log("Shape : " + clonedShape.getType());

    const clonedShape2: Shape = ShapeCache.getShape("second");
    console.log("Shape : " + clonedShape2.getType());

    const clonedShape3: Shape = ShapeCache.getShape("third");
    console.log("Shape : " + clonedShape3.getType());
    
    console.log("\nEND TEST PROTOTYPE PATTER \n");
  }

}

export {
  Example
};
