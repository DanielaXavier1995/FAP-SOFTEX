//switch case

//4.Exiba uma mensagem dependendo do tipo do animal: "cachorro", "gato", "pássaro", ou "outro"

const input = require("readline-sync");

let animal = input.question("digite o tipo de animal: ")

switch (animal) {
    case 'cachorro':
        console.log("CACHORRO!")
        break;
    case 'gato':
        console.log("GATO!")
        break;
    case 'passaro':
        console.log("PÁSSARO!")
        break;
    case 'outro':
        console.log("OUTRO!")
         break;
    default:
        console.log("Animal inválido!!")
        break;
}

