
/**
 * Escreva uma função chamada calculadora que receba dois números (num1, num2) e um operador 
 * matemático (operação) com parametros. A função deve realizar a operação matemática  com um valor
 * padrão de operação '+' 
 */
let resultado;

function calculadora(num1, num2, op = 'soma') {
    switch(op) {
      case 'soma':
        resultado = num1 + num2;
        console.log('Soma:', resultado);
        break;
      case 'subtracao':
        resultado = num1 - num2;
        console.log('Subtracao: ', resultado);
      break;
      case 'multiplicacao':
        resultado = num1 * num2;
        console.log('Multiplicacao: ', resultado);
      break;
      case 'divisao':
        if(num2 !== 0) {
            resultado = num1/num2;
            console.log('Divisao: ',resultado);
        } else {
            console.log('não é possível a divisão por zero')
        }
      break;
    }
}

calculadora(10, 5, 'divisao');

