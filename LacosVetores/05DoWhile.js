const leia = require('readline-sync')

let num, sum = 0

do{
    num = leia.questionInt("Digite um numero: ")
    if(num > 0){
        sum += num
    }
}while(num != 0)
console.log(`\nA soma dos números positivos é: ${sum}`)