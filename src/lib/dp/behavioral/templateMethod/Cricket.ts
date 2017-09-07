import Game from "./Game";

class Cricket extends Game {

  public endPlay(): void  {
    console.log("Cricket Game Finished!");
  }

  public startPlay(): void {
    console.log("Cricket Game Initialized! Start playing.");
  }

  public initialize(): void {
    console.log("Cricket Game Started. Enjoy the game!");
  }
}

export default Cricket;
