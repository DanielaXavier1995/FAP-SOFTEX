
//Instalar módulo readline-sync - para comandos de entrada de dados
//npm install readline-sync

const readline = require("readline-sync"); //inicializar o comando para entrada de dados

var nome = readline.question("Digite o seu nome: ");
console.log("o nome é: ", nome)