import AbstractEntity from "./AbstractEntity";

class RealEntity extends AbstractEntity {

  public doSmth(): void {
    console.log("Real entity has been executed");
  }

}

export default RealEntity;
