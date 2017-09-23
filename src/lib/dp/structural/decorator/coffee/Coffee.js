var Coffee = /** @class */ (function () {
    function Coffee() {
        this.price = 1;
    }
    Coffee.prototype.setPrice = function (price) {
        this.price = price;
    };
    Coffee.prototype.getPrice = function () {
        return this.price;
    };
    return Coffee;
}());
var CoffeeWithMilk = /** @class */ (function () {
    function CoffeeWithMilk(coffee) {
        this.milkPrice = 0.5;
        this.coffee = coffee;
        this.coffee.setPrice(this.coffee.getPrice() + this.milkPrice);
    }
    CoffeeWithMilk.prototype.getPrice = function () {
        return this.coffee.getPrice();
    };
    return CoffeeWithMilk;
}());
var coffee = new Coffee();
console.log('Default coffee price: $', coffee.getPrice());
var coffeeWM = new CoffeeWithMilk(new Coffee());
console.log('Coffee with milk price: $', coffeeWM.getPrice());
