import AdvancedShipping from "./AdvancedShipping"
import ShippingIntrf from "./ShippingIntrf"

class ShippingAdapter extends AdvancedShipping implements ShippingIntrf{
    constructor(discount:number){
        super();
        this.setDiscount(discount);
    }
    request():string{
        return this.calculate();
    }
}

export default ShippingAdapter;