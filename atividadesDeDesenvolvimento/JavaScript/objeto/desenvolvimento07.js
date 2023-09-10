class Animal {
  constructor(nome, idade, tipo) {
    this._nome = nome;
    this._idade = idade;
    this._tipo = tipo;
  }

  getNome = function () {
    return this._nome;
  };

  setNome = function (nome) {
    this._nome = nome;
  };

  getIdade = function () {
    return this._idade;
  };

  setIdade = function (idade) {
    this._idade = idade;
  };

  getTipo = function () {
    return this._tipo;
  };
}

const animal = new Animal("Chico", 3, "gato");
console.log(animal.getNome());
console.log(animal.getTipo());
console.log(animal.getIdade());
animal.setNome("Chiquito");
animal.setIdade(4);
console.log(animal.getNome());
console.log(animal.getIdade());
