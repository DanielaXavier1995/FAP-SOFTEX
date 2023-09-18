const input = require("readline-sync");

let n1 = input.questionInt("Digite o primeiro numero: ");
let n2 = input.questionInt("Digite o segundo numero: ");

try {
  if (n2 === 0) {
    throw new Error("A divisão por zero é impossível!");
  }
  let div = n1 / n2;
  console.log(`Divisão: ${div}`);
} catch (erro) {
  console.error("Ocorreu algum problema: ", erro.message);
} finally {
  console.log("Programa executado!!");
}
