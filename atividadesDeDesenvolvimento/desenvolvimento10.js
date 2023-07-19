
var nome = "Daniela", nota01 = 7, nota02 = 7, quantidadeFaltas = 4, media

media = (nota01 + nota02)/2

if(media < 7 || quantidadeFaltas > 3) {
     console.log("Nome do aluno: ", nome)
     console.log("Status: REPROVADO")
}else {
    console.log("Nome do aluno: ", nome)
    console.log("Status: APROVADO")
}