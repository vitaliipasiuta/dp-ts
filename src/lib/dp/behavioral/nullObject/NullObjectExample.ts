import RealEntity from "./RealEntity";
import NullEntity from "./NullEntity";
import IExample from "../../../models/IExample";

class NullObjectExample implements IExample {

  public start(): void {
    console.log("\nSTART TEST NULL OBJECT PATTER \n");

    const realEntity: RealEntity = new RealEntity();
    const nullEntity: RealEntity = new NullEntity();

    realEntity.doSmth();
    nullEntity.doSmth();

    console.log("\nEND TEST NULL OBJECT PATTER \n");
  }

}

export default NullObjectExample;
