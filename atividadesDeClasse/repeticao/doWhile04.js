//Multiplique um número por 2 até que o resultado seja maior que 1000
const input = require('readline-sync');
let resultado = input.questionInt('Digite um número:');

do {
resultado = 2*resultado;
console.log(resultado);
} while (resultado < 1000) 