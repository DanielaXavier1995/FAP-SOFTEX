
/**
 * Crie uma função chamada maiorNumero que receba tres números como parametros e retorne o 
 * maior deles
 */

function maiorNumero(num1, num2, num3) {

   if(num1 > num2 && num1 > num3) {
      return num1;
   } else if (num2 > num1 && num2 > num3) {
      return num2;
   } else {
      return num3;
   }
  
}

console.log(maiorNumero(50, 4, 10));
