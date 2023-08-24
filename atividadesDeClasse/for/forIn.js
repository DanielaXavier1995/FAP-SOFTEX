/**
 * Suponha que você tenha um objeto com valores numéricos: 
 * {a: 10, b: 20, c: 30, d: 40}. Utilize um laço "for...in" para iterar pelas
 * chaves do objeto e calcular a soma de todos os valores.
 */

const numeros = {a: 10, b: 20, c: 30, d: 40}

for(let value in numeros) {
    console.log( value + ":" + numeros[value]);
}