
/**
 * Escreva uma função chamada apresentacao que aceite três parâmetros: nome, idade e profissão. A 
 * função deve exibir no console uma mensagem de apresentação no formato "Olá, eu sou [nome], tenho 
 * [idade] anos e sou [profissao]", utilizando valores padrão para os parâmetros caso nenhum
 * seja fornecido.
 */


function contagemRegressiva(nome = 'Dani', idade = 28, profissao = 'engenheira') {
  console.log(`Olá, eu sou ${nome}, tenho ${idade} anos e sou ${profissao}`);
}

contagemRegressiva();