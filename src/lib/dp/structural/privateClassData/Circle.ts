import CircleData from "./CircleData";

class Circle {

  private circleData: CircleData;

  constructor(radius: number, color: string, origin: number) {
    this.circleData = new CircleData(radius, color, origin);
  }

  public Circumference(): number {
    return this.circleData.Radius() * Math.PI;
  }

  public Diameter(): number {
    return this.circleData.Radius() * 2;
  }

}

export default Circle;
