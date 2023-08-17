/**
 * Crie uma função recursiva chamada somaRecursiva que receba um número inteiro positivo n como 
 * argumento e calcule a soma de todos os números inteiros de 1 até n.
 */
const input = require("readline-sync");

function somaRecursiva(n) { //1
   if (n === 1) {
     return 1
   } else {
     return n + somaRecursiva(n - 1)// 3 + f(2) => 3 + 2 + 1
   }
}

const num = input.questionInt('Digite um número para o cálculo da soma recursiva: ')
console.log(`A soma recursiva do número ${num} é ${somaRecursiva(num)}`)

