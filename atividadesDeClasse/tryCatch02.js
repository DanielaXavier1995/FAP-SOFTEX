/**
 * Crie um programa que recebe do teclado uma string não numérica em um número utilizando parseInt
 * dentro de um bloco try...catch. Capture o erro e o exiba "Erro: Conversão Inválida" no console.
 */

const input = require("readline-sync")

let valor = 20

try {
    if(isNaN(valor)) {
        throw 'Erro: Conversão Inválida'
    }
    let valorConvertido = parseInt(valor)
    console.log(valor)
} catch (ex) {
    console.error('Erro: Conversão Inválida')
}
