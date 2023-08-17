
/**
 * Escreva uma função chamada ehPar que aceite um número como parâmetro e retorne true se o 
 * número for par e false caso contrario.
 */

function ehPar(num) {
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
    }
}

console.log(ehPar(10));
