//Como você cria um objeto vazio, chamado pessoa em JavaScript?

const pessoa = {};

//Como você adiciona a propriedade "nome" com o valor "João" a um objeto chamado "pessoa"?
const pessoa01 = {
  nome: "joao",
};

//Como você acessa o valor da propriedade "idade" de um objeto chamado "usuario"?
const usuario = {
  idade: 23,
};

console.log(usuario.idade);

/*Suponha que você tenha um objeto "produto" com a propriedade "preco" definida como 50.
 Como você altera o valor dessa propriedade para 75?*/

const produto = {
  preco: 50,
};

produto.preco = 75;
console.log(produto.preco);

//Como você remove a propriedade "email" de um objeto chamado "contato"?
const contato = {
  nome: "dani",
  telefone: "996272527",
  email: "danielamxsoares@gmail.com",
};

delete contato.email;
console.log(contato);

/**
 * Como você adiciona uma propriedade "endereco" com o valor "Rua A, 123" a um objeto existente
 * chamado "cliente"?
 */

const cliente = {
  nome: "dani",
  telefone: "996272527",
};

cliente.endereco = "Rua A, 123";
console.log(cliente);

/**
 * Se você tem um objeto "empresa" com uma propriedade "departamentos",
 *  como você acessa o nome do primeiro departamento?
 */

const empresa = {
  departamentos: ["departamento1", "departamento2", "departamento3"],
};

console.log(empresa.departamentos[0]);

/**
 * Suponha que você tenha um objeto "aluno" com a propriedade "notas" contendo [85, 90, 78].
 *  Como você altera a segunda nota para 95?
 */

const aluno = {
  notas: [85, 90, 78],
};

aluno.notas[1] = 95;
console.log(aluno);

/**
 * Se você tem um objeto "dados" com uma propriedade "valores" contendo [10, 20, 30],
 * como você remove o segundo valor (20) desse array?
 */

const dados = {
  valores: [10, 20, 30],
};

dados.valores.splice(1, 1);
console.log(dados);

/**
 * Como você cria um objeto com as propriedades "titulo" (com o valor "Livro")
 * e "autor" (com o valor "Maria")?
 */

const livros = {
  titulo: "Livro",
  autor: "Maria",
};
