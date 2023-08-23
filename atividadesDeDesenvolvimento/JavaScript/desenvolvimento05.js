const input = require('readline-sync')

function calculadora() {
    let num1 = input.questionFloat('Digite o primeiro numero: ')
    let num2 = input.questionFloat('Digite o segundo numero: ')
    console.log('======== OPERADORES ========')
    console.log('          SOMA (+)          ')
    console.log('        SUBTACAO (-)        ')
    console.log('      MULTIPLICACAO (*)     ')
    console.log('         DIVISAO (/)        ')

    let operador = input.question('Digite o operador: ')
    let op = null;
    let resultado;

    switch(operador) {
        case '+':
            resultado = num1 + num2
            op = 'soma'
            break;
        case '-':
            resultado = num1 - num2
            op = 'subtracao'
            break;
        case '*':
            resultado = num1 * num2
            op = 'multiplicacao'
            break;
        case '/':
            op = 'divisao'
            if(num2 !== 0) {
                resultado = num1/num2
                console.log('Resto da divisao: ' + num1%num2);
            } else {
                console.log('A divisão por zero é impossivel');
            }
            break
    }
    return console.log(`O resultado da operação de ${operador} é ${resultado}`)
}

calculadora()
