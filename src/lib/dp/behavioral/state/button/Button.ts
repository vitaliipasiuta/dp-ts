import State from "./State";
import Off from "./Off";

class Button {

  private current: State;

  constructor() {
    this.current = Off.getInstance();
  }

  public setCurrent(s: State): void {
    this.current = s;
  }

  public push(): void {
    this.current.push(this);
  }

}

export default Button;
