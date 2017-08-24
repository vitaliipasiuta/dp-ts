

import {Memento} from "./Memento";

class Originator {

  private state: string;

  constructor () {}

  public setState(state: string): void {
    // tslint:disable-next-line:no-console
    console.log("Originator: Setting state to " + state);
    this.state = state;
  }

  public save(): Memento {
    // tslint:disable-next-line:no-console
    console.log("Originator: Saving to Memento.");
    return new Memento(this.state);
  }

  public restore(m: Memento): void {
    this.state = m.getState();
    // tslint:disable-next-line:no-console
    console.log("Originator: State after restoring from Memento: " + this.state);
  }

}

export {
  Originator
}