class Pessoa {
  constructor(nome, idade, documento) {
    this._nome = nome;
    this._idade = idade;
    this._documento = documento;
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

  getDocumento = function () {
    return this._documento;
  };

  validadarIdade() {
    if (this.getIdade() > 18) {
      console.log(`${this.getNome()} pode se cadastrar`);
    } else {
      console.log(
        `${this.getNome()} não pode se cadastrar sem autorização dos pais`
      );
    }
  }
}

module.exports = Pessoa;
