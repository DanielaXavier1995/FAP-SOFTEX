/*

Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, 
o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

Caso o usuário não digite um número ou apareça um inválido no campo do ano, 
o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.

*/

const input = require("readline-sync")

let idade
const anoAtual = 2022
let nascimento
let nome = input.question('Digite o seu nome: ')

function validarDados() {
    while (true) {
        try{
        nascimento = input.questionInt('Digite o ano de seu nascimento: ' )

        if (!isNaN(nascimento) && (nascimento >= 1922 && nascimento <= 2021)) {
            return nascimento
         } else {
            throw new Error('valor digitado é inválido, tente novamente');
         }
        } catch (erro) {
            console.error('Ocorreu um erro: ', erro.message);
            continue  
        }
    }
    }        
        
function calculoIdade(anoAtual, nascimento) {
    idade = anoAtual - nascimento
    console.log(`Olá ${nome} em ${anoAtual} sua idade é: ${idade}`)
}

validarDados()
calculoIdade(anoAtual, nascimento)

