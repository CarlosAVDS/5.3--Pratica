const leia = require('readline-sync')

let n1 = leia.questionFloat("Digite o Primeiro numero: " )
let n2 = leia.questionFloat("Digite o Segundo numero: " )
let n3 = leia.questionFloat("Digite o Terceiro numero: " )
let n4 = leia.questionFloat("Digite o Quarto numero: " )

let calc = (n1*n2) - (n3*n4)

console.log(`Sua diferença é de : ${calc}`)