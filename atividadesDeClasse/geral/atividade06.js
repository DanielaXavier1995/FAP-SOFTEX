//ESTRUTURAS DE DECISÃO 

let numero = -7;
let letras = "aaa";
let bool = true;

//1.Verifique se o número é positivo, caso contrário exiba uma mensagem de erro
if(numero > 0) {
    console.log("O número é positivo");
} else {
    console.log("Erro: número é negativo");
}

//2.Verifique se o número é par, caso contrário exiba uma mensagem indicando que é ímpar
if(numero % 2 == 0) {
    console.log("O número é par");
} else {
    console.log("O número é ímpar");
}

//3.Verifica se é uma string vazia. Caso não seja, exiba seu conteúdo
if(letras == null) {
    console.log("A string é vazia");
} else {
    console.log(letras);
}

//4.Verifica se um número é maior que 10. Caso não seja, multiplique-o por 2
if(numero > 10) {
    console.log("O número é maior que 10");
} else {
    console.log(numero * 2);
}

//5.Verifica se uma variável é do tipo boolean. Caso não seja, atribua um valor booleano a ela
if(typeof bool === "boolean") {
    console.log("A variárel é um boolean");
} else {
    bool = false
    console.log(bool);
}