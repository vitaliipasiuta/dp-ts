import Volt from "./Volt";

class Socket {

  getVolt (): Volt {
    return new Volt(120);
  }

}

export default Socket;