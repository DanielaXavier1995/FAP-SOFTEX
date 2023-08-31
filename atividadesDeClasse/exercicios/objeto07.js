/**
 * Faça um programa em Javascript que receba do usuário um número N e depois
   imprima os N primeiros números naturais ímpares.
 */

   const input = require("readline-sync");

   let numero = input.questionInt("Digite um número inteiro: ")
   let cont = 0; 

   for (let i = 1; i < Number.MAX_VALUE; i+=2) {
      if (cont !== numero) {
        console.log(i)
        cont++
      } else {
        break;
      }
   }