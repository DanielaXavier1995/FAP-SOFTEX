//Desafio01: o objetivo do jogo é ganhar o banco. Você

const input = require("readline-sync");

let carta1 = input.questionInt("Digite o valor da primeira carta: ")
let carta2 = input.questionInt("Digite o valor da segunda carta: ")
let soma = carta1 + carta2;

if (soma >= 21) {
   console.log("Voce PERDEU, o banco ganhou!")
} else {
    console.log("Voce GANHOU!")
}

console.log("Pontuação: ", soma)