/*

Faça uma função calculadora de dois números com três parâmetros: os dois primeiros serão os números 
da operação e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte 
definição:
1. Soma
2. Subtração
3. Multiplicação
4. Divisão

Caso seja inserido um número de operação que não exista, o resultado deverá ser 0.

*/

console.log('============ BEM VINDO A CALCULADORA ============')

let numero1, numero2, operacao

function calculadora(numero1, numero2, operacao) {

    switch (operacao) {
        case 'soma':
            operacao === 'SOMA'
            return numero1 + numero2;
        case 'subtracao':
            operacao === 'SUBTRACAO'
            return numero1 - numero2;
        case 'multiplicacao':
            operacao === 'MULTIPLICAÇÃO'
            return numero1 * numero2;
        case 'divisao':
            operacao === 'DIVISÃO'
            return numero1 / numero2;
        default:
            return 0;
    } 
}

const resultado = calculadora(10, 5, 'divisao')

console.log(`O Resultado da ${operacao} é ${resultado}`)