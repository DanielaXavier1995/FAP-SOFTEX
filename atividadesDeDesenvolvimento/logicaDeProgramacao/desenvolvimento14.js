/*
Faça, utilizando o Google Blockly, uma função calculadora que os números e as operações serão feitas pelo usuário. 
O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair.
No início, o programa mostrará a seguinte lista de operações:
1: Soma
2: Subtração
3: Multiplicação
4: Divisão
0: Sair

Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, 
o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.

Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada. 
Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, o sistema irá parar. 

É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado.
*/

const input = require("readline-sync");

function calculadora() {

let tipoOperacao, resultado;

  while(true) {
    console.log('============ BEM VINDO A CALCULADORA ============');

    console.log('================ MENU =================')
    console.log('1: SOMA');
    console.log('2: SUBTRAÇÃO');
    console.log('3: MULTIPLICAÇÃO');
    console.log('4: DIVISÃO');
    console.log('0: SAIR');
    let operacao = input.questionInt('Digite o numero referente a operacao desejada: ');

    if(operacao === 0) {
        console.log('========= SAINDO DA CALCULADORA =========');
        break;
    }

    if (operacao < 0 || operacao > 4) {
        console.log('Número inválido!');
        continue;
    }

    let numero1 = input.questionInt('Digite o PRIMEIRO numero: ');
    let numero2 = input.questionInt('Digite o SEGUNDO numero: '); 

    console.log('=======================================');

    switch (operacao) {
        case 1:
            tipoOperacao = 'SOMA';
            resultado = (numero1 + numero2);
            console.log(`O Resultado da ${tipoOperacao} é ${resultado}`);
            break;
        case 2:
            tipoOperacao = 'SUBTRACAO';
            resultado = (numero1 - numero2);
            console.log(`O Resultado da ${tipoOperacao} é ${resultado}`);
            break;
        case 3:
            tipoOperacao = 'MULTIPLICAÇÃO';
            resultado = (numero1 * numero2);
            console.log(`O Resultado da ${tipoOperacao} é ${resultado}`);
            break;
        case 4:
            tipoOperacao = 'DIVISÃO';
            resultado = (numero1 / numero2);
            console.log(`O Resultado da ${tipoOperacao} é ${resultado}`);
            break;
    }
  } 
}

calculadora();


