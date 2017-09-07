import TerminalExpression from "./TerminalExpression";
import OrExpression from "./OrExpression";
import AndExpression from "./AndExpression";
import IExpression from "./IExpression";

class Example {

  static start(): void {
    console.log("\nSTART TEST INTERPRETER PATTER \n");

    const isMale: IExpression = Example.getMaleExpression();
    const isMarriedWoman: IExpression = Example.getMarriedWomanExpression();

    console.log("John is male? " + isMale.interpret("John"));
    console.log("Julie is a married women? " + isMarriedWoman.interpret("Married Julie"));

    console.log("\nEND TEST INTERPRETER PATTER \n");
  }

  public static getMaleExpression(): IExpression {
    const robert: TerminalExpression = new TerminalExpression("Robert");
    const john: TerminalExpression = new TerminalExpression("John");
    return new OrExpression(robert, john);
  }

  public static getMarriedWomanExpression(): IExpression {
    const julie: TerminalExpression = new TerminalExpression("Julie");
    const married: TerminalExpression = new TerminalExpression("Married");
    return new AndExpression(julie, married);
  }

}

export {
  Example
};
