
import {Subject} from "./Subject";
import {HexObserver} from "./HexObserver";
import {OctObserver} from "./OctObserver";
import {BinObserver} from "./BinObserver";

class Example {

  constructor() { }

  static start(): void {
    console.log("\nSTART TEST OBSERVER PATTER \n");

    const subject: Subject = new Subject();

    new HexObserver(subject);
    new OctObserver(subject);
    new BinObserver(subject);

    for (let i = 1000; i < 1015; i++) {
      console.log('-----');
      console.log(`i ${i}`);
      subject.setState(i);
      console.log('-----');
    }

    console.log("\nEND TEST OBSERVER PATTER \n");
  }

}

export {
  Example
};
