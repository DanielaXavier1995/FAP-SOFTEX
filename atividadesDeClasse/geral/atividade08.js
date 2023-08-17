const readline = require("readline-sync"); 

const nome = readline.question("Digite o seu nome: ");

const idade = readline.question("Digite a sua idade: ");

if (idade >= 16 && idade < 18) {
    console.log("Olá",nome, "você pode solicitar sua habilitação com autorização dos seus pais!!")
} else if(idade >= 18) {
    console.log("Olá",nome, "você pode solicitar sua habilitação!!")
} else {
    console.log("Olá",nome, "você não pode solicitar sua habilitação!!")
}

