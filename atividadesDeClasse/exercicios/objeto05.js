const input = require("readline-sync");

console.log('=============== ESTADOS ================')
console.log(                    'MG'                    )
console.log(                    'SP'                    )
console.log(                    'RJ'                    )
console.log(                    'MS'                    )
let estado = input.question('Digite o estado que deseja enviar o produto: ')
let preco = input.questionFloat(`Digite o valor do produto: `)

switch (estado) {
   case 'MG': 
     preco += (preco*0.07)
     console.log(`O valor final do imposto sobre o produto é: ${preco}`);
   break;
   case 'SP': 
     preco += preco*0.12
     console.log(`O valor final do imposto sobre o produto é: ${preco}`);
   break;
   case 'RJ': 
     preco += preco*0.15
     console.log(`O valor final do imposto sobre o produto é: ${preco}`);
   break;
   case 'MS': 
     preco += preco*0.08
     console.log(`O valor final do imposto sobre o produto é: ${preco}`);
   break;
   default: 
     throw new 'A localidade indicada não existe na base de dados!'
}


