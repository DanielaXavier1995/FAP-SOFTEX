let ar1 = [23, 9, 4, 45];

let ar2 = [7, 12];

let parte1 = ar1.slice(0, 2);
let parte2 = ar1.slice(2);

console.log(parte1);
console.log(parte2);

const resultado1 = parte1.concat(ar2);
console.log(resultado1);
const resultado2 = parte2.concat(ar2);
console.log(resultado2);
