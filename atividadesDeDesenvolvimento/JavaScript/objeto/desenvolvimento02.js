class Banco {
  constructor(numeroConta, saldo, tipo, agencia) {
    this.numeroConta = numeroConta;
    this.saldo = saldo;
    this.tipo = tipo;
    this.agencia = agencia;
  }

  saldoDaConta = function saldo() {
    console.log(this.saldo);
  };

  deposito = function deposito(valor) {
    this.saldo += valor;
    return `Foi depositado o valor de ${valor} em sua conta!`;
  };

  saque = function saque(valor) {
    this.saldo -= valor;
    return `Foi realizado o saque no valor de ${valor} em sua conta!`;
  };

  buscarNumeroConta = function numeroConta() {
    console.log(this.agencia);
  };
}

tipo = {
  CC: "conta corrente",
  CP: "conta poupança",
};

let banco = new Banco(1234, 100.0, tipo.CC, 444);

banco.saldoDaConta();
console.log(banco.deposito(1000.0));
banco.saldoDaConta();
console.log(banco.saque(500.0));
banco.saldoDaConta();
banco.buscarNumeroConta();
