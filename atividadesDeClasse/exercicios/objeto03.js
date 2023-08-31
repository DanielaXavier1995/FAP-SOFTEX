/**
 * Faça um programa que leia o nome do aluno, três notas e mostre o nome e a
  média(aritmética) do aluno.
 */

  const input = require("readline-sync");

  const aluno = {
    nome: 'null',
    nota1: 'null',
    nota2: 'null',
    nota3: 'null',
  }

aluno.nome = input.question('Digite o nome do aluno: ')
aluno.nota1 = input.questionFloat('Digite a 1° nota: ')
aluno.nota2 = input.questionFloat('Digite a 2° nota: ')
aluno.nota3 = input.questionFloat('Digite a 3° nota: ')

let media = (aluno.nota1 + aluno.nota2 + aluno.nota3)/3

console.log(`A média é: ${media}`);