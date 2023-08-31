/**
 * Faça um programa que calcule e mostre a soma dos 50 primeiros números pares.
Faça três versões desse programa, cada uma usando uma estrutura de repetição
diferente (for, while, do-while). Qual das três estruturas é a mais adequada para este
programa? Por que?
*/


let soma = 0;

for (let i = 0; i < 100; i+=2) {
    soma += i
}
console.log(`A soma dos 50 primeiros números pares é igual a ${soma}`);