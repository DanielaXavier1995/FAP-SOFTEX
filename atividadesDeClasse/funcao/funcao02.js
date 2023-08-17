
const input = require("readline-sync")

function exibirSaudacao(nome) {
    nome = input.question('Digite o seu nome: ')
    console.log('--------- SAIDA ---------')
    console.log(`Olá, ${nome}, boa tarde!`);
}

exibirSaudacao();