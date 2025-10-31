const leia = require('readline-sync')

let num, total = 0, count = 0

do{
    num = leia.questionInt("Digite um numero: ")
    if(num%3==0){
        total += num
        count++
    }
}while(num != 0)
console.log(`\nA média de todos os números múltiplos de 3 é: ${total / count}`)