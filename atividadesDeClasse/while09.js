//Calcule o fatorial de um número
const input = require('readline-sync');
let numero = input.question('Digite um número: ');
let fatorial = 1;

while (numero >= 1) {
     fatorial *= numero;
     numero--;
}
console.log(fatorial);

