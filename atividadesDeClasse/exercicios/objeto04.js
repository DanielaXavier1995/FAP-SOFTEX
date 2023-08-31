/**
 * Faça um programa com Javascript para verificar se um determinado ano, fornecido
   pelo usuário, é bissexto. Um ano é bissexto se for divisível por 400 ou se for divisível por
   4 e não for divisível por 100.Exemplos: 1988, 1992, 1996, 2000. Repare que 1900 não é
   bissexto.
 */

   const input = require("readline-sync");

   let ano = input.questionInt('Digite um ano: ')

   if((ano % 400 == 0)||((ano % 4 == 0) && (ano % 100 !== 0))) {
    console.log(`O ano ${ano} é bissexto!`)
   } else console.log(`O ano ${ano} não é bissexto!`)

   
