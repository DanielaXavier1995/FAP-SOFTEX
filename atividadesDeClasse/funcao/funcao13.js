
/**
 * Crie uma função chamada contagemRegressiva que aceite um parâmetro inicio para iniciar a 
 * contagem regressiva. A função deve exibir no console uma contagem regressiva a partir do 
 * número fornecido até 1, utilizando um valor padrão de início igual a 10.
 */


function contagemRegressiva(inicio = 10) {
    while(inicio >= 1){
      console.log(inicio);
      inicio--;
    }
}

//contagemRegressiva()
contagemRegressiva(20)