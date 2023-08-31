//for in...for of

class Pessoa {
  constructor(nome, idade, profissao, cidade) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
    this.cidade = cidade;
  }
}

const pessoa1 = new Pessoa("Dani", 28, "desenvolvedora", "Recife");
const pessoa2 = new Pessoa("Bruno", 33, "advogado", "Recife");
const pessoa3 = new Pessoa("Lucas", 37, "engenheiro", "Sao Paulo");
const pessoa4 = new Pessoa("Jose", 45, "professor", "Manaus");

const arrayPessoa = [pessoa1, pessoa2, pessoa3, pessoa4];

for (p of arrayPessoa) {
  console.log(p);
}
