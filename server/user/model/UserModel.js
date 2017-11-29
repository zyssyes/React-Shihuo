var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var User = new Schema({
    username : String,
    psw      : String,
    create_date : {type: Date, defalut: Date.now}
});

var UserModel = mongoose.model('user', User);
module.exports = UserModel;