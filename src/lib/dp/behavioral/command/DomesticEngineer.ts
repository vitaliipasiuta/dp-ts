import {ICommand} from "./ICommand";

class DomesticEngineer implements ICommand {

  constructor () {

  }

  public execute(): void{
    console.log("take out the trash");
  }
}

export {
  DomesticEngineer
}