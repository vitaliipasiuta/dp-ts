class Volt {

  private volts: number;

  constructor (v: number) {
    this.volts = v;
  }

  getVolts(): number {
    return this.volts;
  }

  setVolts(v: number): void {
    this.volts = v;
  }

}

export default Volt;
