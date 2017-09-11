import ObjectPool from "./ObjectPool";
import ReusableObject from "./ReusableObject";
import IExample from "../../../models/IExample";

class ObjectPoolExample implements IExample {

  public start(): void {
    console.log("\nSTART TEST OBJECT POOL PATTER \n");

    const pool = new ObjectPool();
    const reusableObject1 = new ReusableObject();
    pool.add(reusableObject1, 'reusable_object_key');

    const reusableObject2 = pool.get('reusable_object_key');
    reusableObject2.doSmth();

    console.log("\nEND TEST OBJECT POOL PATTER \n");
  }

}

export default ObjectPoolExample;
