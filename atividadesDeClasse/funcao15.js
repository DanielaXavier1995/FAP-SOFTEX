
/**
 * Crie uma função chamada mensagemPersonalizada que receba um parâmetro texto para uma 
 * mensagem e um parâmetro texto para uma mensagem e um parametro estilo paro o estilo da mensagem 
 * com um valor padrão de estilo "normal". A função deve exibir no conole o texto fornecido com
 * o estilo especificado
 */

function mensagemPersonalizada(texto, estilo = 'normal') {
   switch(estilo) {
     case 'normal':
      console.log(`${texto} em ${estilo}`);
     break;
     case 'negrito':
      estilo = texto.bold();
      console.log(`${texto} em ${estilo}`);
     break;
     case 'italico':
      estilo = texto.italics();
      console.log(`${texto} em ${estilo}`);
     break;
     default:
      console.log(`Estilo inválido!`)
     break;
   }
}

mensagemPersonalizada("aaa", "negrito");