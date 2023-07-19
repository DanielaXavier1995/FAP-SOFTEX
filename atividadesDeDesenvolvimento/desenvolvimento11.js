
/**
 * Desenvolva um código, utilizando o Google Blockly, que utilize as seguintes características de um veículo:
- Quantidade de rodas;
- Peso bruto em quilogramas;
- Quantidade de pessoas no veículo.

Com essas informações, o programa mostrará qual é a melhor categoria de habilitação para o veículo informado a partir das condições:
A: Veículos com duas ou três rodas;
B: Veículos com quatro rodas, que acomodam até oito pessoas e seu peso é de até 3500 kg;
C: Veículos com quatro rodas ou mais e com peso entre 3500 e 6000 kg;
D: Veículos com quatro rodas ou mais e que acomodam mais de oito pessoas;
E: Veículos com quatro rodas ou mais e com mais de 6000 kg.
 */

var quantRodas = 6
var peso = 5000
var quantPessoas = 10

if (quantRodas == 2 || quantRodas == 3) {
    console.log("CATEGORIA A")
} else if (quantRodas == 4 && quantPessoas <= 8 && peso <= 3500) {
    console.log("CATEGORIA B")
} else if (quantRodas >= 4 && (peso >= 3500 && peso <= 6000)) {
    console.log("CATEGORIA C")
} else if (quantRodas >= 4 && quantPessoas >=8) {
    console.log("CATEGORIA D")
} else if (quantRodas >= 4 && peso > 6000) {
    console.log("CATEGORIA E")
} else {
    console.log("Veículo não se enquadra nas categorias cadastradas!")
}
