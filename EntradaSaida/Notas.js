const leia = require('readline-sync')

let soma = 0
for (let i = 1; i <= 4; i++){
    soma += leia.questionFloat(`Digite sua nota ${i}: `)
}
console.log(`Sua Média Final é: ${(soma/4).toFixed(1)}`)



