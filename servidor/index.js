const express = require('express');
const connectDB = require('./config/database.js')
const cors = require("cors")

const app = express();

connectDB();

app.use(express.json())
app.use(cors())

app.use('/api/productos', require('./routes/producto'))



app.listen(4001, () => {
    console.log("El servidor está corriendo Perfectamente")
});