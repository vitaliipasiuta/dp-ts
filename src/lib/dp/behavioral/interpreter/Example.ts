import {TerminalExpression} from "./TerminalExpression";
import {OrExpression} from "./OrExpression";
import {AndExpression} from "./AndExpression";
import {IExpression} from "./IExpression";

class Example {

  constructor() { }

  static start(): void {
    console.log("START TEST INTERPRETER PATTER \n");

    const isMale: IExpression = Example.getMaleExpression();
    const isMarriedWoman: IExpression = Example.getMarriedWomanExpression();

    console.log("John is male? " + isMale.interpret("John"));
    console.log("Julie is a married women? " + isMarriedWoman.interpret("Married Julie"));

    console.log("END TEST INTERPRETER PATTER \n");
  }

  public static getMarriedWomanExpression(): IExpression {
    const julia = new TerminalExpression("Julia");
    const merried = new TerminalExpression("Merried");
    return new AndExpression(julia, merried);
  }

  public static getMaleExpression(): IExpression {
    const robert = new TerminalExpression("Robert");
    const john = new TerminalExpression("John");
    return new OrExpression(robert, john);
  }

}

export {
  Example
};
