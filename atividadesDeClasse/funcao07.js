
/**
 * Escreva uma função chamada verificarPar que aceite um número como entrada e exiba no console 
 * se o número é par ou não.
 */
const input = require("readline-sync");

const numero = input.questionInt('Digite um número: ');

function verificarPar(numero) {
    console.log('-------- SAIDA ---------')
    if(numero % 2 === 0) {
      console.log(`${numero} é PAR!`);
    } else {
    console.log(`${numero} é IMPAR!`);
    }
}
 verificarPar(numero);


