import Button from "./Button";
import Off from "./Off";

class State {

  public push(b: Button): void {
    b.setCurrent(Off.getInstance());
    console.log("   turning OFF");
  }

}

export default State;
