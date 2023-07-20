
//var, let, const

//o var funciona durante todo o escopo
var numero = 10
console.log(numero)

console.log(numero)
var numero = 10

//O let só funciona após a inicialização e também funciona dentro de um escopo 
let numero = 10
console.log(numero)
//não funciona
console.log(numero)
let numero = 10

//CONST => É uma constante(não pode ser modificada), também é um bloco de escopo, disponível após a declaração

const pessoa = {
    nome: "jose",
    idade: 20
}

//É possível modificar apenas as informações que estão declaradas na constante (ela é um objeto)
pessoa.nome = "joão";
pessoa.idade = 68;