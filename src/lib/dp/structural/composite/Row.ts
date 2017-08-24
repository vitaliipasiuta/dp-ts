import {Composite} from "./Composite";

class Row extends Composite {

  constructor (val: number) {
    super(val);
  }

  public traverse(): void {
    console.log("ROW");
    super.traverse();
  }

}

export {
  Row
}