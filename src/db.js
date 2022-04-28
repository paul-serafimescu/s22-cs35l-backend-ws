const mongoose = require('mongoose');

// connect to the database
(async () => await mongoose.connect('mongodb://localhost:27017/myapp'))().catch(err => console.error(err));

const OrderSchema = new mongoose.Schema({
    cheese: Boolean,
    sauce: Boolean,
    toppings: [String],
    count: Number,
});

// add methods or other logic BEFORE compiling with mongoose.model()
OrderSchema.methods.addTopping = function (topping) {
    this.toppings.push(topping);
};

OrderSchema.methods.serialize = function () {
    return {
        id: this.id,
        cheese: this.cheese,
        sauce: this.sauce,
        toppings: this.toppings,
        count: this.count
    };
}

module.exports = mongoose.model('Order', OrderSchema);
