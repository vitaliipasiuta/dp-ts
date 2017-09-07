import Memento from "./Memento";

class Originator {

  private state: string;

  public setState(state: string): void {
    console.log("Originator: Setting state to " + state);
    this.state = state;
  }

  public save(): Memento {
    console.log("Originator: Saving to Memento.");
    return new Memento(this.state);
  }

  public restore(m: Memento): void {
    this.state = m.getState();
    console.log("Originator: State after restoring from Memento: " + this.state);
  }

}

export default Originator;
