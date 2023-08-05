/*

Você deve criar três listas em JavaScript:

1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.

Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. Ao terminar, imprima novamente todas as informações das três listas.

*/ 

//CRIANDO AS LISTAS:
const nomes = ['Daniela', 'Bruno', 'Felipe'];
const idades = [28, 33, 50];
const cores = ['rosa', 'azul', 'verde'];

console.log('======= LISTAS ORIGINAIS =======');
nomes.forEach(function(array){
     console.log(array)
});
console.log('============================');
idades.forEach(function(array){
    console.log(array)
});
console.log('============================');
cores.forEach(function(array){
    console.log(array)
});

//MODIFICANDO AS LISTAS:
//Removendo e adicionando elementos no final:
idades.pop();
cores.pop();
idades.push(55);
cores.push('roxo');

//Removendo e adicionando elementos no início:
idades.shift();
cores.shift();
idades.unshift(30);
cores.unshift('amarelo');

//Dando replece em 1 elemento na posição 1:
idades.splice(1, 1, 40);
cores.splice(1, 1, 'vermelho');

//Adicionando um elemento na posição 1:
nomes.splice(1, 0, 'Lucas');
idades.splice(1, 0, 15);
cores.splice(1, 0, 'preto');

console.log('======= LISTAS MODIFICADAS =======');
nomes.forEach(function(array){
     console.log(array)
});
console.log('============================');
idades.forEach(function(array){
    console.log(array)
});
console.log('============================');
cores.forEach(function(array){
    console.log(array)
});