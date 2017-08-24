import {Observer} from "./Observer";

class Subject {

  private observers: Observer[] = [];
  private state: number;

  constructor() {}

  public add(o: Observer): void {
    this.observers.push(o);
  }

  public getState(): number {
    return this.state;
  }

  public setState(val: number): void {
    this.state = val;
    this.execute();
  }

  private execute(): void {
    for (let o of this.observers) {
      o.update();
    }
  }

}

export {
  Subject
}