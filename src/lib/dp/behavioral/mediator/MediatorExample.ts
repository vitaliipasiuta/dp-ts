import User from "./User";
import IExample from "../../../models/IExample";

class MediatorExample implements IExample {

  public start(): void {
    console.log("\nSTART TEST MEDIATOR PATTER \n");

    const robert: User = new User("Robert");
    const john: User = new User("John");

    robert.sendMessage("Hi, John!");
    john.sendMessage("Sup, dude!");

    console.log("\nEND TEST MEDIATOR PATTER \n");
  }

}

export default MediatorExample;
