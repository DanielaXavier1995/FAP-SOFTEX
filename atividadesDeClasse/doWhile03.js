//conte e imprima a quantidade de números pares de 1 a 50
let n = 1, cont = 0;

do{
if (n % 2 === 0) {
     cont++;
}
n++;
} while (n <= 50) 
console.log(`A quantidade de números pares é ${cont}`);