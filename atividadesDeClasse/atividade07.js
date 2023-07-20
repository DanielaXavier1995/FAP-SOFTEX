
//Estrutura de decisão:

//1.Classifique um número em três categorias: negativo, zero ou positivo
function verificaNumero() {
    
const num = 10

if(num == 0) {
    console.log("O número é igual a 0")
} else if(num > 0) {
    console.log("O número é POSITIVO")
} else {
    console.log("O número é NEGATIVO")
}
}

//numero()

//2.Verifique se um número é divisível por 2, 3 ou 5 

function verificaMultiplos () {

    const num = 10

    if (num % 2 == 0) {
        console.log("O número é multiplo de 2!")
    } else if (num % 3 == 0) {
        console.log("O número é multiplo de 3!")
    } else if (num % 5 == 0) {
        console.log("O número é multiplo de 5!")
    }
}

verificaMultiplos()