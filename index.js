const express = require('express');
require('dotenv').config

const app = express();

app.get('/', (req, res) => {
    // res.send("Conexión establecida")

    res.status(404).json({
        ok: true,
        msg: "Okis"
    })
})

app.listen(process.env.PORT, () => {
    console.log('listening on port ' + `${ process.env.PORT }` + " bish");
})