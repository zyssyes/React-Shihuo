var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Cart = new Schema({
    username : String,
    goods_id : String,
    goods_name : String,
    cnt : Number,
    create_date : {type: Date, defalut: Date.now}
});

var CartModel = mongoose.model('cart', Cart);
module.exports = CartModel;