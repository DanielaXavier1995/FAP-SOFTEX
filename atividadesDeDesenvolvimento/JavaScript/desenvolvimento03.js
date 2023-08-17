
const input = require('readline-sync')

console.log("============================")

let nome = input.question("Digite seu nome: ")
let salario = input.questionFloat("Digite o seu salario: ")
let idade = input.questionInt("Digite a sua idade: ")
let diploma = input.question("Voce tem diploma? (true / false) ")
let resp;

do {
if (diploma == 'true' || diploma == 'false') {
    resp = false;
} else {
    console.log(`Tipo inválido, o diploma não é boolean! Tente novamente!`)
    diploma = input.question("Voce tem diploma? (true / false) ")
    resp = true;
}
} while(resp == 'true');

    console.log("=====================");
    console.log(`Nome: ${nome}`)
    console.log(`Salário: ${salario}`)
    console.log(`Idade: ${idade}`)
    console.log(`Diploma: ${diploma}`)





