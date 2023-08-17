//switch case

//3.Exiba uma mensagem de acordo com o estado civil: "solteiro", "casado", "divorciado" ou "outro"

const input = require("readline-sync");

let status = input.question("digite o seu estado civil: ")

switch (status) {
    case 'solteiro':
        console.log("voce é SOLTEIRO!")
        break;
    case 'casado':
        console.log("voce é CASADO!")
        break;
    case 'divorciado':
        console.log("voce é DIVORCIADO!")
        break;
    case 'outro':
        console.log("OUTRO!")
         break;
    default:
        console.log("Status inválido!!")
        break;
}