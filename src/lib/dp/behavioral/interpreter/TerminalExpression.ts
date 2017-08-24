import {IExpression} from "./IExpression";

class TerminalExpression implements IExpression {

  private data: string;

  constructor (data: string) {
    this.data = data;
  }

  public interpret(context: string): boolean {
    return context.includes(this.data);
  }

}

export {
  TerminalExpression
}