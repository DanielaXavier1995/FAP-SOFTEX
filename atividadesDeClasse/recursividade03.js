/**
 * Escreva uma função chamada fibonacci que receba um número n como parâmetro e retorne o n-ésimo 
 * termo da sequência de Fibonacci. Lembre-se de implementar essa função de forma recursiva
 */

function fibonacci(n) {
    if(n < 2) return n
    return fibonacci(n-1) + fibonacci(n-2) 
}

console.log(fibonacci(7))