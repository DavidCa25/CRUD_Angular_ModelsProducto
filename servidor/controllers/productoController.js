const Producto = require("../models/Producto");

exports.crearProducto = async (req, res) =>{
    try {
        let producto;
        //Creacion del producto
        producto = new Producto(req.body);
        await producto.save();

        res.send(producto)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}
exports.obtenerProductos = async (req, res) =>{
    try {
        
        //Creacion del producto
        const productos = await Producto.find();
        res.send(productos)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}
exports.actualizarProductos = async (req, res) =>{
    try {
        
        //Actualización del producto
        const {product, category, location, price} = req.body;
        let producto = await Producto.findById(req.params.id);
        
        if(!producto){
            res.status(404).json({msg: 'No existe el producto'})
        }
            producto.product = product;
            producto.category = category;
            producto.location = location;
            producto.price = price; 
            
            producto = await Producto.findOneAndUpdate({ _id: req.params.id }, producto, {new: true});
            res.json(producto) 
        
        

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}
exports.eliminarProductos = async (req, res) =>{
    try {
        
        let producto = await Producto.findById(req.params.id);
        
        if(!producto){
            res.status(404).json({msg: 'No existe el producto'})
        }
             
            await Producto.findOneAndDelete({ _id: req.params.id });
            res.json({ msg: 'Producto Eliminado con Exito'}) 
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerProductoPorId = async (req, res) =>{
    try {
        //Actualización del producto
        let producto = await Producto.findById(req.params.id);
        
        if(!producto){
            res.status(404).json({msg: 'No existe el producto'})
        }          
        res.json(producto) 
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}