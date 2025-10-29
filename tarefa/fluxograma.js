const leia = require('readline-sync')

let salario = leia.questionFloat("Digite o salario: ")
let abono = leia.questionFloat("Digite o abono: ")

let novoSalario = salario + abono
console.log("Seu novo salario é de: R$%f", novoSalario)