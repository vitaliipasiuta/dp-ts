import Visitor from "./Visitor";

abstract class Visitee {

  public abstract accept(visitor: Visitor): void

}

export default Visitee;
