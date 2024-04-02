const express = require('express');
const { dbCONN } = require('./database/db')
require('dotenv').config();

const app = express();

dbCONN()

app.use('', require('./routes/inventario.js'))

// app.get('/', (req, res) => {
//     // res.send("Conexión establecida")

//     res.status(404).json({
//         ok: true,
//         msg: "Okis"
//     })
// })

app.listen(process.env.PORT, () => {
    console.log('listening on port ' + `${ process.env.PORT }` + " bish");
})