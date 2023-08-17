
/**
 * Escreva uma função chamada dobro que aceita um parâmetro num e exiba 
 * o dobro desse numero no console
 */
const input = require("readline-sync");

const numero = input.questionInt('Digite um número: ');

function dobro (numero) {
    console.log(numero*2);
}

dobro(numero);