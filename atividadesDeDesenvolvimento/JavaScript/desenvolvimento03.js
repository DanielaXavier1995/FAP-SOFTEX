
const input = require('readline-sync')

let nome = input.question("Digite seu nome: ")
let salario = input.questionFloat("Digite o seu salario: ")
let idade = input.questionInt("Digite a sua idade: ")
let diploma = input.question("Voce tem diploma? (true / false) ")
let tipo = diploma

if(typeof tipo == "boolean"){console.log(nome, salario, idade, diploma)} 
else {console.log(`Tipo inválido!`)}

