const input = require('readline-sync')

function statusAluno() {
    let nota1 = input.questionFloat('Digite a primeira nota:')
    let nota2 = input.questionFloat('Digite a segunda nota:')
    let nota3 = input.questionFloat('Digite a terceira nota:')

    let media = (nota1 + nota2 + nota3)/3

    let resultado = media>=7 ? 'aprovado' : 'reprovado';

    return console.log(resultado);
}

function notaMinima() {
    let nota1 = input.questionFloat('Digite a primeira nota:')
    let nota2 = input.questionFloat('Digite a segunda nota:')
    let nota3;

    nota3 = 21 - nota1 - nota2;

    return console.log(`Voce precisa de uma nota igual a ${nota3} para ser APROVADO!`)
}

//statusAluno()
notaMinima()