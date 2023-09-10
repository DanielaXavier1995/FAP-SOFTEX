const Funcionario = require("./Funcionario.js");

const funcionario = new Funcionario(
  "Daniela",
  28,
  "ffff",
  "Desenvolvedor BackEnd",
  3000.0
);

console.log(funcionario.getNome());
console.log(funcionario.getIdade());
console.log(funcionario.getDocumento());
console.log(funcionario.getCargo());
console.log(funcionario.getSalario());

funcionario.validadarIdade();

funcionario.setSalario(3500.0);
console.log(funcionario.getSalario());
