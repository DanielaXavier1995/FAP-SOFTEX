
//ESTRUTURAS DE DECISÃO 

let numero = 12;
let letras = null;
let bool = true;

//1.Verifique se o número é positivo
if(numero > 0) {
    console.log("1.O número é positivo");
} else {
    console.log("1.O número é negativo");
}

//2.Verifique se o número é par
if(numero % 2 == 0) {
    console.log("2.O número é par");
} else {
    console.log("2.O número é ímpar");
}

//3.Verifica se é uma string vazia
if(letras == null) {
    console.log("3.A string é vazia");
} else {
    console.log("3.A string é:", letras);
}

//4.Verifica se um número é maior que 10
if(numero > 10) {
    console.log("4.O número é maior que 10");
} else {
    console.log("4.O número é menor que 10");
}

//5.Verifica se uma variável é do tipo boolean
if(typeof bool === "boolean") {
    console.log("5. A variárel é um boolean");
} else {
    console.log("5. A variável não é um boolean");
}

