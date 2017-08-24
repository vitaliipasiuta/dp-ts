import {IComponent} from "./IComponent";

class Primitive implements IComponent {

  private value: number;

  constructor (val: number) {
    this.value = val;
  }

  public traverse(): void {
    console.log(`${this.value}  - `);
  }

}

export {
  Primitive
}