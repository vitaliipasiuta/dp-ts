import Volt from "./Volt";

interface ISocketAdapter {

  get120Volt(): Volt;
  get12Volt(): Volt;
  get3Volt(): Volt;

}

export default ISocketAdapter;