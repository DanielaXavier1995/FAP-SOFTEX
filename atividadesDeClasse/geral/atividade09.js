//switch case

//1.Verifique o dia da semana com base em um número de 1 a 7

const input = require("readline-sync");

let num = input.questionInt("digite um número de 1 a 7: ")

switch (num) {
    case 1: 
       console.log("HOJE É SEGUNDA!")
    break;
    case 2: 
       console.log("HOJE É TERÇA!")
    break;
    case 3: 
       console.log("HOJE É QUARTA!")
    break;
    case 4: 
       console.log("HOJE É QUINTA!")
    break;
    case 5: 
       console.log("HOJE É SEXTA!")
    break;
    case 6: 
       console.log("HOJE É SÁBADO!")
    break;
    case 7: 
       console.log("HOJE É DOMINGO!")
    break;
    default: 
       console.log("DIA INVÁLIDO!")
    break;
}

//Converta um número de mês em seu nome correspondente:

