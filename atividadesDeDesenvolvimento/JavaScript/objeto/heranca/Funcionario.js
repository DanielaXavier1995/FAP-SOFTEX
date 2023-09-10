const Pessoa = require("./Pessoa.js");

class Funcionario extends Pessoa {
  constructor(nome, idade, documento, cargo, salario) {
    super(nome, idade, documento);
    this._cargo = cargo;
    this._salario = salario;
  }

  getCargo = function () {
    return this._cargo;
  };

  setCargo = function (cargo) {
    this._cargo = cargo;
  };

  getSalario = function () {
    return this._salario;
  };

  setSalario = function (salario) {
    this._salario = salario;
  };
}

module.exports = Funcionario;
