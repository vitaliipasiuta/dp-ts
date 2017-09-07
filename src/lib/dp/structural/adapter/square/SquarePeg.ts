class SquarePeg {

  private width: number;

  constructor (width: number) {
    this.width = width;
  }

  getWidth (): number {
    return this.width;
  }

  setWidth (width: number): void {
    this.width = width;
  }

}

export default SquarePeg;
