const mongoose = require('mongoose');

const dbCONN = async() => {
    console.log('port',process.env.PORT)
    console.log('db url', process.env.db_CON)
    try {
        await mongoose.connect(process.env.db_CON , {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Te has conectado a la base de datos")
    }catch (error){
        console.error(error)
        process.exit(1)
    }
}

module.exports = {
    dbCONN
}