class Cachorro {
  constructor() {}

  apresentar(nome, idade) {
    console.log(`Olá sou um cachorro fofinho chamado ${nome}, tenho ${idade} anos e preciso de um lar! 
                Voce gostaria de me adotar?`);
  }

  static agradecer() {
    console.log("Obrigada!!! AU AU AU!");
  }
}

const cachorro = new Cachorro();

cachorro.apresentar("Toto", 3);
Cachorro.agradecer();
