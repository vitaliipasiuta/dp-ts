
import {RealEntity} from "./RealEntity";
import {NullEntity} from "./NullEntity";

class Example {

  constructor() { }

  static start(): void {
    console.log("\nSTART TEST NULL OBJECT PATTER \n");

    const realEntity: RealEntity = new RealEntity();
    const nullEntity: RealEntity = new NullEntity();

    realEntity.doSmth();
    nullEntity.doSmth();

    console.log("\nEND TEST NULL OBJECT PATTER \n");
  }

}

export {
  Example
};
