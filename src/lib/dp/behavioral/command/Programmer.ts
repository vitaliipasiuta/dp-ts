import {ICommand} from "./ICommand";

class Programmer implements ICommand {

  constructor () {

  }

  public execute(): void{
    console.log("sell the bugs, charge extra for the fixes");
  }
}

export {
  Programmer
}