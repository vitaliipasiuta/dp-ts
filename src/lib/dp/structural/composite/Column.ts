import {Composite} from "./Composite";

class Column extends Composite {

  constructor (val: number) {
    super(val);
  }

  public traverse(): void {
    console.log("Column");
    super.traverse();
  }

}

export {
  Column
}