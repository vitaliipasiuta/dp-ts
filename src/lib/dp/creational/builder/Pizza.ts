class Pizza {

  constructor () {}

  private dough: string = "";
  private sauce: string = "";
  private topping: string = "";

  setDough (dough: string): void {
    this.dough = dough;
  }

  setSauce (sauce: string): void {
    this.sauce = sauce;
  }

  setTopping (topping: string): void {
    this.topping = topping;
  }

}

export {
  Pizza
}