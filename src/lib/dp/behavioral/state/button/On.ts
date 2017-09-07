import State from "./State";

class On extends State {

  private static instance: On = new On();

  public static getInstance(): State {
    return this.instance;
  }

}

export default On;
