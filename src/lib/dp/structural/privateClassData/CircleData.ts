class CircleData {

  private radius: number;
  private color: string;
  private origin: number;

  constructor (radius: number, color: string, origin: number) {
    this.radius = radius;
    this.color = color;
    this.origin = origin;
  }

  public Radius(): number {
    return this.radius;
  }

  public Color(): string {
    return this.color;
  }

  public Origin(): number {
    return this.origin;
  }

  // and same

}

export {
  CircleData
}