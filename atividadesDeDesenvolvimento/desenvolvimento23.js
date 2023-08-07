/*

Considere o array [3, 7, 9, 1, 0].

O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim por diante, seguindo a ordem.

Levando em conta as três estruturas de dados (fila, lista e pilha) e as suas regras de operações, qual seria a sequência dos números removidos em cada uma delas para esvaziá-las completamente utilizando o array mencionado?

*/ 

//Criando a matriz:

const array = [3, 7, 9, 1, 0];
const arrayVazio = [];

//fila
function enfileirar() {
   while(array.length > 0){
     let numeroRemovido = array.shift();
     arrayVazio.push(numeroRemovido);
     console.log(arrayVazio);
   }
   console.log("---------------------------------")
}

//Lista:
function listar() {
    while(array.length > 0) {
        let indice = array.indexOf();
        arrayVazio.push(array.splice(indice, 1));
        console.log(arrayVazio);
    }
    console.log("---------------------------------");
}

//Empilhar:
function empilhar() {
    while(array.length > 0){
        let numeroRemovido = array.pop();
        arrayVazio.push(numeroRemovido);
        console.log(arrayVazio);
      }
      console.log("---------------------------------")
}

//enfileirar();
//listar();
empilhar();


