/**
 * Uma empresa contrata um encanador a R$ 30,00 por dia. Crie um programa que
  solicite o número de dias trabalhados pelo encanador e imprima a quantia líquida que
  deverá ser paga, sabendo-se que são descontados 8% para pagamento de impostos e
  taxas devidas.
 */

  const input = require("readline-sync");

  let dias = input.questionInt('Digite a quantidade de dias trabalhados: ')

  const pagamento = (1 - 0.08)*30*dias

  console.log(`O seu pagamento será de: ${pagamento}`);