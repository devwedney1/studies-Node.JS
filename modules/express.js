const express = require ("express");
const UserModel = require("../src/database/models/user.mofel");

const app = express();

app.get("/home", (req, res) => {
    // res.contentType("application/html");
    res.status(200).send("<h1>Hello, World</h1>");
});

app.get("/users", (req, res) => {
    const users = [
        {
            name: "Fernanda Alves",
            email: "fernanda@gmail.com"
        },
        {
            name: "Lucas Alves",
            email: "lucas@gmail.com",
        },
    ];

    res.status(200).json(users);
});

app.post("/users", (req, res) => {
    const users = UserModel.create(req.body)

    res.status(201).json(user);
})

const port = 8080;

app.listen(port, () => console.log(`Rodando na porta ${port}!`));