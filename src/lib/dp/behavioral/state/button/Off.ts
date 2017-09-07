import State from "./State";
import Button from "./Button";
import On from "./On";

class Off extends State {

  private static instance: Off = new Off();

  public static getInstance(): State {
    return this.instance;
  }

  public push(b: Button): void {
    b.setCurrent(On.getInstance());
    console.log("   turning On");
  }

}

export default Off;
