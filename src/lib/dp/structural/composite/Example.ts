import {Row} from "./Row";
import {Column} from "./Column";
import {Composite} from "./Composite";
import {Primitive} from "./Primitive";

class Example {

  constructor() { }

  static start(): void {
    console.log("\nSTART TEST COMPOSITE PATTER \n");

    const first: Composite = new Row(1);
    const second: Composite = new Column(2);
    const third: Composite = new Column(3);
    const fourth: Composite = new Row(4);
    const fifth: Composite = new Row(5);

    first.add(second);
    first.add(third);
    third.add(fourth);
    third.add(fifth);
    first.add(new Primitive(6));
    second.add(new Primitive(7));
    third.add(new Primitive(8));
    fourth.add(new Primitive(9));
    fifth.add(new Primitive(10));

    first.traverse();

    console.log("\nEND TEST COMPOSITE PATTER \n");
  }

}

export {
  Example
};
