import ShippingIntrf from "./ShippingIntrf"

class Shipping implements ShippingIntrf{
    public request(): string {
        //...
        return "$49";
    }
}

export default Shipping;