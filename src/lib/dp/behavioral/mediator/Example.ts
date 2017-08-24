import {User} from "./User";

class Example {

  constructor() { }

  static start(): void {
    console.log("START TEST MEDIATOR PATTER \n");

    const robert: User = new User("Robert");
    const john: User = new User("John");

    robert.sendMessage("Hi, John!");
    john.sendMessage("Sup, dude!");
    console.log("END TEST MEDIATOR PATTER \n");
  }

}

export {
  Example
};
