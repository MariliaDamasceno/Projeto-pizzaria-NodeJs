const mongoose = require("mongoose");

function connectToDatabase() {
    mongoose.connect(process.env.URLDATABASE, {
        useNewUrlParser: true, //padronizações
        useUnifiedTopology: true
    }).then(() => {
        console.log("MONGO DB CONECTADO");
    }).catch((err) => {
        console.log(`Erro na conexão com o banco: ${err}`);
    });
}

module.exports = connectToDatabase