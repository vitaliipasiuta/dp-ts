import ObjectPool from "./ObjectPool";
import ReusableObject from "./ReusableObject";
import IExample from "../../../models/IExample";

class ObjectPoolExample implements IExample {

  public start(): void {
    console.log("\nSTART TEST OBJECT POOL PATTER \n");

    const pool = new ObjectPool();
    let reusableObject = new ReusableObject();
    pool.add(reusableObject, 'reusable_object_key');

    reusableObject = pool.get('reusable_object_key');
    reusableObject.doSmth();

    console.log("\nEND TEST OBJECT POOL PATTER \n");
  }

}

export default ObjectPoolExample;
