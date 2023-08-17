/**
 * Crie um programa que recebe do teclado um objeto e tente acessar uma propriedade inexistente 
 * desse objeto dentro de um bloco try...catch. Capture o erro e exiba "Erro: Propriedade não encontrada"
 * no console.
 */
let obj = {
    nome: "Dani",
    idade: 28
}

try {
    let tipo = obj.sexo
    if(typeof tipo == "undefined") {
       throw "Erro: Propriedade não encontrada"
    }
} catch (ex){
    console.error("Erro: Propriedade não encontrada");
}
