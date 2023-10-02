const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    fullname: {
        type: String,
        require: true,
    },
    imguser: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        
    },
    email: {
        type: String,
        require: false,
    },
    facebook: {
        type: String,
        require: false,
    },
    fileup: {
        type: String,
        require: false,
    },
    textarea: {
        type: String,
        require: false,
    },
    
});

const Order = mongoose.model('order', orderSchema);

exports.Order = Order;