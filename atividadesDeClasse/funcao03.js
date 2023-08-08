
const input = require("readline-sync")

function exibirSaudacao(nome, idade, dia, mes, ano) {
    nome = input.question('Digite o seu nome: ');
    idade = input.questionInt('Digite a sua idade: ');
    dia = input.questionInt('Digite o dia: ');
    mes = input.question('Digite o mes: ')
    ano = input.questionInt('Digite o ano: ')
    console.log('--------- SAIDA ---------')
    console.log(`Olá, ${nome}, boa tarde, percebi que hoje ${dia} de ${mes} de ${ano}, voce tem ${idade} anos!`);
}

exibirSaudacao();