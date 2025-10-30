const leia = require('readline-sync')

let num = leia.questionInt('Digite um numero: ')

if(num%2 == 0){
    if(num >= 0){
        console.log(`O número ${num} é par e positivo`)
    }else{
        console.log(`O número ${num} é par e negativo`)
    }
}else{
    if(num >= 0){
        console.log(`O número ${num} é ímpar e positivo`)
    }else{
        console.log(`O número ${num} é ímpar e negativo`)
    }
}

