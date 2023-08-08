
const input = require("readline-sync")

    console.log('--------- ENTRADA ---------')
    const nome = input.question('Digite o seu nome: ');
    const idade = input.questionInt('Digite a sua idade: ');
    const dia = input.questionInt('Digite o dia: ');
    const mes = input.question('Digite o mes: ');
    const ano = input.questionInt('Digite o ano: ');

function exibirSaudacao(nome, idade, dia, mes, ano) {
    console.log('--------- SAIDA ---------')
    console.log(`Olá, ${nome}, boa tarde, percebi que hoje ${dia} de ${mes} de ${ano}, voce tem ${idade} anos!`);
}

exibirSaudacao(nome, idade, dia, mes, ano);