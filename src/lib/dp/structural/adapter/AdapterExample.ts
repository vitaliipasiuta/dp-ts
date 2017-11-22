import SquarePegAdapter from "./square/SquarePegAdapter";
import RoundHole from "./square/RoundHole";
import SocketClassAdapterImpl from "./volts/SocketClassAdapterImpl";
import Volt from "./volts/Volt";
import ISocketAdapter from "./volts/ISocketAdapter";
import IExample from "../../../models/IExample";
import Shipping from "./shipping/Shipping";
import ShippingAdapter from "./shipping/ShippingAdapter";

class AdapterExample implements IExample {

  public start(): void {
    console.log("\nSTART TEST ADAPTER PATTER \n");

    const sockAdapter: ISocketAdapter = new SocketClassAdapterImpl();
    const v3: Volt = this.getVolt(sockAdapter,3);
    const v12: Volt = this.getVolt(sockAdapter,12);
    const v120: Volt = this.getVolt(sockAdapter,120);

    console.log("v3 volts using Class Adapter=" + v3.getVolts());
    console.log("v12 volts using Class Adapter=" + v12.getVolts());
    console.log("v120 volts using Class Adapter=" + v120.getVolts());

    console.log("\nEND TEST ADAPTER PATTER \n");
  }

  private getVolt (sockAdapter: ISocketAdapter, i: number): Volt {
    switch (i) {
      case 3: return sockAdapter.get3Volt();
      case 12: return sockAdapter.get12Volt();
      case 120: return sockAdapter.get120Volt();
      default: return sockAdapter.get120Volt();
    }
  }

  public startSquare(): void {
    console.log("\nSTART TEST ADAPTER PATTER \n");

    const roundHole: RoundHole = new RoundHole(5);
    let squarePegAdapter: SquarePegAdapter;

    for (let i = 6; i < 10; i++) {
      squarePegAdapter = new SquarePegAdapter(i);
      squarePegAdapter.makeFit(roundHole);
    }

    console.log("\nEND TEST ADAPTER PATTER \n");
  }

  public startShipping(){
    let shipping = new Shipping();
    let discount = 10;
    let advancedShipping = new ShippingAdapter(discount);

    let cost;

    cost = shipping.request();

    //old price
    console.log('Old price / no discount: ',cost);

    cost = advancedShipping.request();

    //new price
    console.log(`New price / with discount ${discount} : `,cost);
  }

}

export default AdapterExample;
