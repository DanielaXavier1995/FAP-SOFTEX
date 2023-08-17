//Multiplique um número por 2 até que o resultado seja maior que 1000
const input = require('readline-sync');
let resultado = input.questionInt('Digite um número:');

while (resultado < 1000) {
     resultado = 2*resultado;
     console.log(resultado);
}