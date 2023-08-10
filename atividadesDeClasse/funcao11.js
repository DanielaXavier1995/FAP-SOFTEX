
/**
 * Crie uma função chamada saudação que aceita um parâmetro nome para uma pessoa e exiba no 
 * console a saudação "Olá, [nome]!" utilizando um valor padrão para nome caso nenhum seja 
 * fornecido
 */

function saudacao(nome = 'desconhecido', saudacao = 'Olá') {
    console.log(`${saudacao}, ${nome}`);
}

saudacao()
saudacao('Dani')
saudacao('Lucas', 'Hello')