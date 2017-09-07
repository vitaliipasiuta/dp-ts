import Game from "./Game";
import Cricket from "./Cricket";
import Football from "./Football";

class Example {

  static start(): void {
    console.log("\nSTART TEST TEMPLATE PATTER \n");

    let game: Game = new Cricket();
    game.play();
    game = new Football();
    game.play();

    console.log("\nEND TEST TEMPLATE PATTER \n");
  }

}

export {
  Example
};
