
/**
 * Crie uma função chamada mostrarNúmeros que receba dois parâmetros, início e fim. Essa função deve
 * exibir todos os números no intervalo de inicio a fim (inclusive) no console.
 */
const input = require("readline-sync");

const inicio = input.questionInt('Digite um número de inicio: ');
const fim = input.questionInt('Digite um número de fim: ');

function mostrarNumeros (inicio, fim) {
    console.log('-------- SAIDA ---------')
    while(inicio <= fim) {
      console.log(inicio)
      inicio++;
    }
}

mostrarNumeros(inicio, fim)


