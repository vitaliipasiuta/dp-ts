import {ICommand} from "./ICommand";

class Politician implements ICommand {

  constructor () {

  }

  public execute(): void{
    console.log("take money from the rich, take votes from the poor");
  }
}

export {
  Politician
}