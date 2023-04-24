const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstNmae: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        // O formando que caracte que o usario podera digita
        type: String,
        // Só irar aceita ser o usario cria a senha, ser não irar cria no banco
        required: true,
        //minimo de caracteres para salva no banco a senha
        minlength: 7,
    },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;