//Verifique se um número é primo 
const input = require('readline-sync');
let numero = input.questionInt('Digite um número:');
let i = 2, cont = 0;

while (i <= numero) {
     if(numero % i === 0) {
        cont++
     } 
     i++;
}

if (cont === 1) {
     console.log(`O número é primo!`)
} else {
     console.log(`O número não é primo!`)
}