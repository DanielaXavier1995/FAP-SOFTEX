//Calcule a média de uma lista de números 
const numero = [7, 10, 5];
let i = 0;
let soma = 0, media;

while (i < numero.length) {
     soma += numero[i];
     i++;
}
media = soma/(numero.length);
console.log(media);

