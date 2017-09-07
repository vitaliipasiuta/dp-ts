import Memento from "./Memento";

class Caretaker {

  private momentos: Memento[] = [];

  public addMemento(m: Memento): void {
    this.momentos.push(m);
  }

  public getMemento(): Memento {
    return this.momentos[0];
  }

}

export default Caretaker;
