import {ICommand} from "./ICommand";
import {Politician} from "./Politician";
import {DomesticEngineer} from "./DomesticEngineer";
import {Programmer} from "./Programmer";

class Example {

  static start(): void {
    console.log("START TEST COMMAND PATTER \n");

    const queue = Example.produceRequests();
    Example.workOffRequests(queue);

    console.log("END TEST COMMAND PATTER \n");
  }

  public static produceRequests(): ICommand[] {
    const queue: ICommand[] = [];
    queue.push(new DomesticEngineer());
    queue.push(new Politician());
    queue.push(new Programmer());
    return queue;
  }

  public static workOffRequests(queue: ICommand[]): void {
    for (const c of queue) {
      c.execute();
    }
  }

}

export {
  Example
};
