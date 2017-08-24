import {Game} from "./Game";

class Football extends Game {

  public endPlay(): void  {
    console.log("Football Game Finished!");
  }

  public startPlay(): void {
    console.log("Football Game Initialized! Start playing.");
  }

  public initialize(): void {
    console.log("Football Game Started. Enjoy the game!");
  }
}

export {
  Football
}