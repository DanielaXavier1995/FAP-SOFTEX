
/**
 * Crie uma função chamada imprimirLista que aceita um array como parâmetro e exiba cada 
 * elemento desse array no console, um por um.
 */

const arrayNumeros = [19, 55, 45, 34, 98, 10, 23, 1];

function imprimirLista(arrayNumeros) {
    arrayNumeros.forEach((x) => {
         console.log(x);
    });
}

imprimirLista(arrayNumeros);



