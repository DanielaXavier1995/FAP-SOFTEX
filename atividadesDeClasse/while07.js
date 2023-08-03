//Faça o usuário digitar sua senha até que seja digitada a senha correta 
const input = require('readline-sync');
let senha = input.question('Cadastre a sua senha: ');
let login = input.question('Realize o seu login: ');

while (senha !== login) {
     console.log('Senha incorreta!')
     login = input.question('Realize o seu login: ');
     if (senha === login) {
          console.log('senha correta!')
          break;
     }
}

