const leia = require('readline-sync')

let salario = leia.questionFloat('Digite seu Salario Bruto: ')
let addNot = leia.questionFloat('Digite seu Adicional Noturno: ')
let hrExtra = leia.questionFloat('Digite suas Horas Extras: ')
let desc = leia.questionFloat('Digite seus Descontos: ')

let result = salario + addNot + (hrExtra * 5) - desc
console.log(`Seu Salario Liquido é de: R$${result}` )