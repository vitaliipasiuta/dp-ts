import SquarePeg from "./SquarePeg";
import RoundHole from "./RoundHole";

class SquarePegAdapter {

  private squarePeg: SquarePeg;

  constructor (w: number) {
    this.squarePeg = new SquarePeg(w);
  }

  public makeFit(roundHole: RoundHole): void {
    const amount: number = this.squarePeg.getWidth() - roundHole.getRadius() * Math.sqrt(2);
    console.log(`reducing SquarePeg ${this.squarePeg.getWidth()} by ${((amount < 0) ? 0 : amount)} amount`);
    if (amount > 0) {
      this.squarePeg.setWidth(this.squarePeg.getWidth() - amount);
      console.log(`width right now is ${this.squarePeg.getWidth()}`);
    }
  }

}

export default SquarePegAdapter;
