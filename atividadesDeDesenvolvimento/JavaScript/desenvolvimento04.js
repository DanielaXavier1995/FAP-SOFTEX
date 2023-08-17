
const input = require("readline-sync")

let nota01 = input.questionFloat("Digite a 1° nota: ")
let nota02 = input.questionFloat("Digite a 2° nota: ")
let nota03 = input.questionFloat("Digite a 3° nota: ")

let media = (nota01 + nota02 + nota03)/3

console.log(media)