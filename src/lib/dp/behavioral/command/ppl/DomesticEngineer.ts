import ICommand from "./ICommand";

class DomesticEngineer implements ICommand {

  public execute(): void{
    console.log("take out the trash");
  }
}

export default DomesticEngineer;
