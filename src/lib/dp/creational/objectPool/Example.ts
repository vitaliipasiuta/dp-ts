
import {ObjectPool} from "./ObjectPool";
import {ReusableObject} from "./ReusableObject";

class Example {

  constructor() { }

  static start(): void {
    console.log("START TEST OBJECT POOL PATTER \n");

    const pool = new ObjectPool();
    let reusableObject = new ReusableObject();
    pool.add(reusableObject, 'reusable_object_key');

    reusableObject = pool.get('reusable_object_key');
    reusableObject.doSmth();

    console.log("END TEST OBJECT POOL PATTER \n");
  }

}

export {
  Example
};
