/*

Faça um código, utilizando o Google Blockly, que execute a contagem regressiva de uma bomba, 
informando o número de segundos para explodir. Ele deverá mostrar a mensagem “iniciando contagem
regressiva”, os segundos passados e, no final, a mensagem “BUM!”.

*/ 

const input = require("readline-sync")

console.log("================ CONTAGEM REGRESSIVA =================")

const segundos = input.questionInt("Digite o número de segundos para a bomba explodir: ")

console.log('iniciando a contagem regressiva...')
console.log("==============================================")

for (let i = segundos; i >= 0; i--) {
    console.log(`TEMPO RESTANTE = ${i}`)
}

console.log("==============================================")

console.log('BUUUUUM!!!')
