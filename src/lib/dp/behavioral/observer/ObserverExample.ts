import Subject from "./Subject";
import HexObserver from "./HexObserver";
import OctObserver from "./OctObserver";
import BinObserver from "./BinObserver";
import IExample from "../../../models/IExample";

class ObserverExample implements IExample {

  public start(): void {
    console.log("\nSTART TEST OBSERVER PATTER \n");

    const subject: Subject = new Subject();

    new HexObserver(subject);
    new OctObserver(subject);
    new BinObserver(subject);

    for (let i = 10; i < 15; i++) {
      console.log('-----');
      console.log(`i ${i}`);
      subject.setState(i);
      console.log('-----');
    }

    console.log("\nEND TEST OBSERVER PATTER \n");
  }

}

export default ObserverExample;
