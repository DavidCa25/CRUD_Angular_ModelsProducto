//Rutas para producto
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProductos);
router.put('/:id', productoController.actualizarProductos);
router.delete('/:id', productoController.eliminarProductos);
router.get('/:id', productoController.obtenerProductoPorId);

module.exports = router;