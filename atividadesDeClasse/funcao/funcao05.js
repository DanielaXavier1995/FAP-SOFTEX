
/**
 * Crie uma função chamada mostrarNumeros que receba dois parâmetros, inicio e fim. Essa função 
 * deve exibir todos os números inteiros no intervalo de inicio a fim (inclusive) no console 
 */
const input = require("readline-sync");

const numero = input.questionInt('Digite um número: ');

function dobro (numero) {
    console.log(numero*2);
}

dobro(numero);