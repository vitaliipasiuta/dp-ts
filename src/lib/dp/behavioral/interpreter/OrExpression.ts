import IExpression from "./IExpression";

class OrExpression implements IExpression {

  private expr1: IExpression = null;
  private expr2: IExpression = null;

  constructor (expr1: IExpression, expr2: IExpression) {
    this.expr1 = expr1;
    this.expr2 = expr2;
  }

  public interpret(context: string): boolean {
    return this.expr1.interpret(context) || this.expr2.interpret(context);
  }

}

export default OrExpression;
