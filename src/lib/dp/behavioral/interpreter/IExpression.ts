interface IExpression {
  interpret(context: string): boolean
}

export {
  IExpression
}