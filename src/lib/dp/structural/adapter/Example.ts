import {SquarePegAdapter} from "./SquarePegAdapter";
import {RoundHole} from "./RoundHole";

class Example {

  constructor() { }

  static start(): void {
    console.log("\nSTART TEST ADAPTER PATTER \n");

    const roundHole: RoundHole = new RoundHole(5);
    let squarePegAdapter: SquarePegAdapter;

    for (let i = 6; i < 10; i++) {
      squarePegAdapter = new SquarePegAdapter(i);
      squarePegAdapter.makeFit(roundHole);
    }

    console.log("\nEND TEST ADAPTER PATTER \n");
  }

}

export {
  Example
};
