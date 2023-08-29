/*

Crie uma lista encadeada em que cada elemento representa uma pessoa.

Ela precisa conter informações como nome, idade e referência ao filho dela.

*/ 

const input = require("readline-sync");

//Criando a função da lista encadeada
function linkedList() {
  //Ela precisa ter um topo
  let head = null;
  
  //Criando o nó da linkedList que possui um nome, uma idade e aponta para o próximo
  const Node = (name, age) => {
    return {
      name,
      age, 
      next: null
    }
  }
  
  //Criando um "método" para adicionar os nós passando como parâmetro nome e idade e realizando as validações em seu escopo
  const add = (name, age) => {
    //Caso o head não exista(nulo), irá criar um nó e atribuir ao head retornando
    if(!head) {
      head = Node(name, age);
      return head;
    }
    //Caso já exista um head, criasse uma variável comum nó para armazenar os valores que estavam no head 
    //(nesse caso o head se torna um nó comum)
    let node = head;
    //Enquanto existir um próximo nó, não null, atribua ao nó o valor dos próximo
    while(node.next) {
      node = node.next;
    }
    //Se o next for null atribua o valor do próximo nó
    node.next = Node(name, age);
    return node.next;
  }
  //retorno das funções
  return {
    add: (name, age) => add(name, age),
    print: () => console.log(head)
  }
}
 
const list = linkedList();

let op;
do {
   let name = input.question('Digite o nome: ');
   let age = input.questionInt('Digite a idade: ');
       list.add(name, age);
   op = input.questionInt('Deseja adicionar outro no a lista (1 - SIM ou 0 - NAO): ');
} while (op !== 0);

list.print()
