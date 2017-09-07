import Socket from "./Socket";
import ISocketAdapter from "./ISocketAdapter";
import Volt from "./Volt";

class SocketClassAdapterImpl extends Socket implements ISocketAdapter {

  get120Volt(): Volt {
    return this.getVolt();
  }

  get12Volt(): Volt {
    const v: Volt = this.getVolt();
    return this.convertVolt(v, 10);
  }


  get3Volt(): Volt {
    const v: Volt = this.getVolt();
    return this.convertVolt(v, 40);
  }

  private convertVolt (v: Volt, i: number): Volt {
    return new Volt(v.getVolts() / i);
  }

}

export default SocketClassAdapterImpl;