import Composite from "./Composite";

class Row extends Composite {

  constructor (val: number) {
    super(val);
  }

  public traverse(): void {
    process.stdout.write("ROW");
    super.traverse();
  }

}

export default Row;
