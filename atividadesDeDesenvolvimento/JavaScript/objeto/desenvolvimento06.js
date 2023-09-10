const input = require("readline-sync");

let numero = input.questionInt("Digite o numero a ser testado: ");

function testarNumero(n) {
  if (n % 2 === 0) {
    console.log(`O número ${n} é par!`);
  } else {
    console.log(`O número ${n} é ímpar!`);
  }
}

testarNumero(numero);
