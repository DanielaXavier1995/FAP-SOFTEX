//Desafio02: Agora vamos adicionar um adversário ao jogo "O banco". Implemente o código anterior mantendo as regras

const input = require("readline-sync");

while(true) {

    console.log("======== BEM-VINDO JOGADOR ========")
    let cartaJogador1 = input.questionInt("Digite o valor da primeira carta do jogador: ")
    let cartaJogador2 = input.questionInt("Digite o valor da segunda carta do jogador: ")
    let somaJogador = cartaJogador1 + cartaJogador2;

    console.log("======== BANCO ========")
    let cartaBanco1 = input.questionInt("Digite o valor da primeira carta do banco: ")
    let cartaBanco2 = input.questionInt("Digite o valor da segunda carta do banco: ")
    let cartaBanco3 = input.questionInt("Digite o valor da terceira carta do banco: ")
    let cartaBanco4 = input.questionInt("Digite o valor da quarta carta do banco: ")
    let somaBanco = cartaBanco1 + cartaBanco2 + cartaBanco3 + cartaBanco4;

    if (somaBanco > 21 || (somaJogador <= 21 && somaJogador > somaBanco)) {
        console.log("Parabéns, VOCÊ VENCEU!")
        console.log("Pontuação do Jogador: ", somaJogador)
        console.log("Pontuação do Banco: ", somaBanco)
        break;
    }
    
    console.log("VOCÊ PERDEU, TENTE NOVAMENTE")
    console.log("Pontuação do Jogador: ", somaJogador)
    console.log("Pontuação do Banco: ", somaBanco)

}



