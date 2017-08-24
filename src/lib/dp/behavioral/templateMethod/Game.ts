abstract class Game {

  abstract initialize(): void;
  abstract startPlay(): void;
  abstract endPlay(): void;

  // template method
  public play(): void {
    this.initialize();
    this.startPlay();
    this.endPlay();
  }

}

export {
  Game
}