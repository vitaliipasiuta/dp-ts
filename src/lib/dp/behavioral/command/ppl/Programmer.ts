import ICommand from "./ICommand";

class Programmer implements ICommand {

  public execute(): void{
    console.log("sell the bugs, charge extra for the fixes");
  }
}

export default Programmer
