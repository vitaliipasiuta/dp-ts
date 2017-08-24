import {Observer} from "./Observer";
import {Subject} from "./Subject";

class BinObserver extends Observer{

  constructor (subject: Subject) {
    super();
    this.subject = subject;
    this.subject.add(this);
  }

  public update(): void {
    console.log(this.subject.getState().toString(2));
  }

}

export {
  BinObserver
}