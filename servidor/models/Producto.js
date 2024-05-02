const mongoose = require('mongoose');
const ProductoSchema = mongoose.Schema({
    product: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});
module.exports = mongoose.model('Producto', ProductoSchema)