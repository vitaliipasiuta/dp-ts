class AdvancedShipping {
    private price = 49;
    public setDiscount(discount:number):void {
        this.price = this.price - discount;
    }
    public calculate():string {
        return "$"+this.price;
    }
}

export default AdvancedShipping;