const input = require('readline-sync')

function calculoMedia() {
    let nota1 = input.questionFloat('Digite a primeira nota: ')
    let nota2 = input.questionFloat('Digite a segunda nota: ')

    let media = (nota1 + nota2)/2
    console.log(`A média é: ${media}`)
}

function calculoMedia(nota1, nota2) {
    let media = (nota1 + nota2)/2
    return console.log(`A média é: ${media}`)
}

const calcularMedia = (nota1, nota2) => ((nota1 + nota2)/2)

//calculoMedia ()
//calculoMedia(7, 7)
console.log(`A média é: ${calcularMedia(7,7)}`);