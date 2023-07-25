//switch case

//4.Calcule o valor de uma operação matemática com base em um operador: soma, subtração, multiplicação ou divisão

const input = require("readline-sync");

console.log("========= CALCULADORA =========")

let operacao = input.question("digite o operador desejado: ")
let n1 = input.questionInt("digite um valor inteiro: ")
let n2 = input.questionInt("digite um valor inteiro: ")

switch (operacao) {
    case 'soma':
        console.log("RESULTADO: ", (n1 + n2))
        break;
    case 'subtracao':
        console.log("RESULTADO:", (n1 - n2))
        break;
    case 'divisao':
        console.log("RESULTADO:", (n1 / n2))
        break;
    case 'multiplicacao':
        console.log("RESULTADO:", (n1 * n2))
         break;
    default:
        console.log("Operação inválida!!")
        break;
}