import Composite from "./Composite";

class Column extends Composite {

  constructor (val: number) {
    super(val);
  }

  public traverse(): void {
    process.stdout.write("Column");
    super.traverse();
  }

}

export default Column;
