const input = require("readline-sync");

function fatorial(n) {
    if(n === 0 || n === 1) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

const numero = input.questionInt('Digite um número para o cálculo do fatorial: ')
console.log(`O fatorial de ${numero} é ${fatorial(numero)}!`);