/*

Nesta atividade, você deve criar um código em JavaScript com uma matriz 
bidimensional para armazenar informações sobre animais e as suas características.

Cada linha deve representar um animal e cada coluna terá as diferentes informações
 sobre ele, como nome, espécie e idade.

*/ 

//Criando a matriz:

const animais = [
    ["gato", "felino", "chico", 3],
    ["cachorro", "mamifero", "marvin", 5],
    ["coelho", "mamifero", "ted", 1]
];

for(let i = 0; i < animais.length; i++){
    for(let j = 0; j<animais[i].length; j++){
        console.log(animais[i][j]);
    }
    console.log("-------------------")
}
