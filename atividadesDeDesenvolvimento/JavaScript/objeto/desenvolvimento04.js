const carro = {
  modelo: "HB20",
  marca: "Hyundai",
  cor: "branca",
  ano: 2015,
  ligado: function () {
    console.log("O carro está ligado");
  },
  desligado: function () {
    console.log("O carro está desligado");
  },
  mostrarInformacoes: function () {
    console.log(
      `modelo: ${this.modelo}; marca: ${this.marca}; cor: ${this.cor}; ano: ${this.ano}`
    );
  },
};

//carro.ligado();
//carro.desligado();
//carro.mostrarInformacoes();

const musica = {
  nome: "Yellow",
  artista: "Coldplay",
  ano: 2000,

  play: function () {
    console.log(`Ok, vamos tocar ${this.nome}!`);
  },
  pause: function () {
    console.log(`Ok, vamos parar de tocar ${this.nome}!`);
  },
  mostrarInformacoes: function () {
    console.log(
      `nome: ${this.nome}; artista: ${this.artista}; ano: ${this.ano}`
    );
  },
};

musica.play();
musica.pause();
musica.mostrarInformacoes();
