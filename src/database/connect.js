const mongoose = require('mongoose');

const connectToDatabase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.0bdi8zf.mongodb.net/?retryWrites=true&w=majority`,
        (error) => {
            if(error) {
                return console.log("Ocorreu um erro ao ser conectar com o bando de dados: ", error);
            }

            return console.log("Conexão ao banco de dados com sucesso!");
        }
    );
};

module.exports = connectToDatabase