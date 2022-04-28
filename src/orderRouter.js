const express = require('express');
const Order = require('./db');
const router = express.Router();

function getOrderById(id) {
    return Order.findOne({ _id: id });
}

router.get('/', async function (_, res) {
    const orders = await Order.find();
    res.send(orders.map(order => order.serialize()));
});

router.post('/', async function (req, res) {
    const order = new Order({
        cheese: req.body.cheese,
        sauce: req.body.sauce,
        toppings: req.body.toppings,
        count: req.body.count,
    });
    await order.save();

    res.send(order.serialize());
});

router.get('/:orderId', async function (req, res) {
    const order = await getOrderById(req.params.orderId);
    res.send(order.serialize());
});

router.patch('/:orderId', async function (req, res) {
    const order = await getOrderById(req.params.orderId);
    
    order.cheese = req.body.cheese ?? order.cheese;
    order.sauce = req.body.sauce ?? order.sauce;
    order.toppings = req.body.toppings ?? order.toppings;
    order.count = req.body.count ?? order.count;
    await order.save();

    res.send(order.serialize());
});

router.delete('/:orderId', async function (req, res) {
    await Order.deleteOne({ _id: req.params.orderId });
    res.send({ message: 'done!' });
});

module.exports = router;
