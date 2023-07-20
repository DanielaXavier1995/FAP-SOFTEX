//1.Declarar uma variável chamada 'minhaVar', sem valor
var minhaVar 

//2.Após declarada, atribua o valor 10 a variavel "minhaVar"
minhaVar = 10

//3.Declare uma nova variável "soma", e adicione uma instrução somando os valores 15 e 8
var soma = 15 + 8

//4.Atribua a variável "soma" todo o valor dela, somando 1, usando o operador de soma abreviado 
soma++

//5.Atribua a variável "soma" todo o valor dela, multiplicando 3, usando o operador de multiplicação abreviado 
soma *= 3

//6.Qual o valor da soma ate aqui?
console.log(soma)

//7. Declare uma variável chamada "fazSol", atribuindo a ela o valor booleano para verdadeiro
var fazSol = true

//8.Declare a variável chamada "comida", que recebe o array com os valores 'arroz', 'feijao' e 'ovo' 
var comida = ['arroz', 'feijão', 'ovo']

//9.Digite a instrução que imprime o valor 'feijão', que está na variável 'comida'
console.log(comida[1])

//10.Digite o código que verifica se a variavel 'soma' é igual a variável 'minhaVar'(testando tb o tipo)
if(soma === minhaVar) {
    console.log("Soma igual a minhaVar")
}else {
    console.log("Soma diferente a minhaVar")
}

//11. Digite o código que verifica se a variável 'minhaVar' é menor ou igual a variável 'soma'
if(minhaVar <= soma) {
    console.log("minhaVar é menor ou igual a soma")
}else {
    console.log("minhaVar é maior que a soma")
}

//12.Crie uma função chamada 'divisao' que recebe como parametro dois numeros =, e retorna o valor da divisao entre eles
function divisao (n1, n2) {
    return n1/n2
}

//13.Invoque a funcao criada acima, passando os parâmetros 10 e 2
console.log(divisao(10,2))