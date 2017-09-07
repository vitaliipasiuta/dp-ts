import Subject from "./Subject";

abstract class Observer {

  protected subject: Subject;
  public abstract update(): void;

}

export default Observer;
