/*

Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, 
o código deve retornar uma mensagem para votar novamente.

Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos. 

*/ 

const input = require("readline-sync")

let x = 0, y = 0, z = 0, branco = 0, nulo = 0

function vencedor(){
    if (x > y && x > z) {
        return console.log(`O vencedor é o CANDIDATO X com ${x} votos`)
    } else if (y > x && y > z) {
        return console.log(`O vencedor é o CANDIDATO Y com ${y} votos`)
    } else if (z > x && z > y) {
        return console.log(`O vencedor é o CANDIDATO Z com ${z} votos`)
    } else {
        return console.log('Não houve vencedor!!')
    }
    }

function validacaoVoto(){
    console.log( 
        '========= BEM VINDO A VOTACAO =========' ,
        '- candidato_X => 889' ,
        '- candidato_Y => 847' ,
        '- candidato_Z => 515',
        '- branco => 0'
       )
   
       let voto = input.question('Digite a opcao desejada: ')
   
       if(isNaN(voto)){
           console.error('O valor digitado não é um número, tente novamente');

       } else {
       switch(voto) {
           case '889':
               x++
               break
           case '847':
               y++
               break
           case '515':
               z++
               break
           case '0':
               branco++
               break
           default:
              nulo++
              break
       }
       }
}

while(true) {

    validacaoVoto()

    let parada = input.question('Deseja votar novamente (sim/nao): ')

    if(parada.toLowerCase() === 'nao') {

        console.log('========== RESULTADO DA VOTAÇÃO ==========')
        console.log(`CANDIDATO X = ${x}`)
        console.log(`CANDIDATO Y = ${y}`)
        console.log(`CANDIDATO Z = ${z}`)
        console.log(`VOTOS BRANCOS = ${branco}`)
        console.log(`VOTOS NULOS = ${nulo}`)
        console.log('==========================================')
        vencedor()

        return false;
    }
}
