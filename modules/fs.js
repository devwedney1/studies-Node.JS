const fs = require("fs");
const path = require("path");

// Cria uma pasta
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//     if(error) {
//         return console.log("Erro", error);
//     }

//     console.log("Pasta criada com sucesso!");
// });

// Cria um arquivo
fs.writeFile(
    path.join(__dirname, "/test", "test.txt"), "Hello node!",(error) => {
        if (error) {
            return console.log("Erro: ", error);
        }
        console.log("Arquivo Criado com Sucesso");
    }
);

// Adicionar á um arquivo
fs.appendFile(
    path.join(__dirname, "/test", "test.txt"), " Hello Word!", (error) => {
        if (error) {
            return console.log("Erro: ", error);
        }

        console.log("Arquivo modificicado com suecsso!");
    }
);

// Ler arquivo
fs.readFile(
    path.join(__dirname, "/test", "test.txt"), "utf8", (error, data) => {
        if (error) {
            return console.log("Erro: ", error);
        }

        console.log(data);
    }
);
