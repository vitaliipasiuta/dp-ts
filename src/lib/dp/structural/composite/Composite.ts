import {IComponent} from "./IComponent";

abstract class Composite implements IComponent {

  private children: IComponent[] = [];
  private total: number = 0;
  private value: number;

  constructor (val: number) {
    this.value = val;
  }

  public add(c: IComponent): void {
    this.children[this.total++] = c;
  }

  public traverse(): void {
    console.log(`${this.value}  - `);
    for (let i = 0; i < this.total; i++) {
      this.children[i].traverse();
    }
  }

}

export {
  Composite
}