/**
 * Faça um programa para ler um horário (hora:minuto:segundo) de início e a duração,
   em segundos, de uma experiência biológica. O programa deve informar o horário
   (hora:minuto:segundo) de término da mesma.
 */

   const input = require("readline-sync");

   let horarioInicio = input.question('Digite um horario de inicio em (HH:mm:ss): ')
   let duracao = input.question('Digite a duracao do experimento em segundos: ')

   const arrayTexto = horarioInicio.split(':')

   const data = new Date(null, null, null, arrayTexto[0], arrayTexto[1], arrayTexto[2])

   const tempoTermino = arrayTexto[0]*3600 + arrayTexto[1]*60 + arrayTexto[2] + duracao

   const horaFinal = Math.floor(tempoTermino/3600) 

 
   


   

