/**
 * Crie um programa que receba do teclado um número e tenta dividir por zero dentro de um bloco try...catch.
 * Capture o erro e o exiba "Erro: Divisão por zero" no console.
 */

const input = require("readline-sync")

try {
    let numero = input.questionInt("Digite um número: ")
    let div = input.questionInt("Digite um pelo qual deseja realizar a divisão: ")
    if(div === 0) {
        throw "Erro: Divisão por zero!"
    }
    let resultado = numero/div
    console.log(`O resultado é: ${resultado}`)
} catch (ex){
    console.error("Erro: Divisão por zero!");
}
