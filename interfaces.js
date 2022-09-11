// type과 동일한 기능을 함
var pt = { x: 123, y: 123 };
var thomas = {
    first: "Thomas",
    last: "Hardy",
    id: 234,
    sayHi: function () { return "Hello"; }
};
thomas.first = "asdj";
var product = {
    name: "dlzagu",
    price: 123,
    applyDiscount: function (discount) {
        var newPrice = this.price * (1 - discount);
        this.price = newPrice;
        return this.price;
    }
};
