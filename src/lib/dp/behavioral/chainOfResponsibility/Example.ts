import {Processor} from "./Processor";
import {IImage} from "./IImage";
import {IR} from "./IR";
import {LS} from "./LS";

class Example {

  constructor() { }

  static start(): void {
    console.log("START TEST CHAIN OF RESPONSIBILITY PATTER \n");

    const inputImages: IImage[] = [new IR(), new IR(), new LS(), new IR(), new LS(), new LS()];
    const processors: Processor[] = [new Processor(), new Processor(), new Processor()];

    for (let i=0, j; i < inputImages.length; i++) {
      console.log("Operation #" + (i + 1) + ":");
      j = 0;
      while (!processors[j].execute(inputImages[i])) {
        j = (j + 1) % processors.length;
      }
      console.log('\n');
    }

    console.log("END TEST CHAIN OF RESPONSIBILITY PATTER \n");
  }

}

export {
  Example
};
