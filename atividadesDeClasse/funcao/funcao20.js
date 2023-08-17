
/**
 * Escreva uma função chamada calcularIMC que receba o peso e a altura de uma pessoa como parâmetros
 * e retorne o índice de massa corporal (IMC) calculado.
 */

function calcularIMC(peso, altura) {

   let imc = peso/(altura*altura)
   return imc;

}

console.log(calcularIMC(70, 1.64));
