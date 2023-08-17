
/**
 * Escreva uma função chamada calcularMedia que receba um array de números como parâmetro e 
 * calcule a média desses números. Não é necessário exibir o resultado, apenas retorne o valor
 * da média
 */

const arrayMedia = [50, 20, 50];
let soma = 0;

function calcularMedia(arrayMedia) {
    for (let i = 0; i < arrayMedia.length; i++) {
        soma = soma + arrayMedia[i]
    }
    const media = soma/arrayMedia.length
    return media
}

calcularMedia(arrayMedia);





