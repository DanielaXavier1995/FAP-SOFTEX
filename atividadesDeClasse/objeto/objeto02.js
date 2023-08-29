/*
Suponha que você está desenvolvendo um aplicativo de agendamento e precisa representar os dias 
da semana. Como você usaria enums para isso e qual seria o benefício?
*/

const diasDaSemana = {
  DOMINGO: "Domingo",
  SEGUNDA: "Segunda-feira",
  TERCA: "terca-feira",
  QUARTA: "quarta-feira",
  QUINTA: "quinta-feira",
  SEXTA: "sexta-feira",
  SÁBADO: "sabado",
};

/*
Você está construindo um jogo e precisa representar os diferentes tipos de inimigos.
Como você usaria enums para essa situação?
*/

const inimigos = {
  CORINGA: "Batman",
};

/**
 * Você está criando um aplicativo de reserva de passagens aéreas e precisa representar os
 * diferentes tipos de classe (Econômica, Executiva, Primeira Classe). Como você usaria enums
 * para isso?
 */

const classes = {
  ECONOMICA: 1,
  EXECUTIVA: 2,
  PRIMEIRA_CLASSE: 3,
};

/**
 * Imagine que você está desenvolvendo um aplicativo de tarefas e deseja categorizar as
 * tarefas em "Trabalho", "Estudo" e "Lazer". Como você usaria enums para esse cenário?
 */

const tarefas = {
  TRABALHO: 1,
  ESTUDO: 2,
  LAZER: 3,
};

/**
 * Em um aplicativo de e-commerce, você precisa definir os diferentes status de um pedido:
 * "Em processamento", "Enviado" e "Entregue". Como você usaria enums para isso?
 */

const status = {
  EM_PROCESSAMENTO: 1,
  ENVIADO: 2,
  ENTREGUE: 3,
};

console.log(diasDaSemana.DOMINGO);
