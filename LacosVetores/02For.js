const leia = require('readline-sync')

let num, par = 0, impar = 0

for(let i = 0; i <10; i++){
    num = leia.questionInt(`Digite o ${i+1} numero: `)
    if(num%2 == 0){
        par++
    }else{
        impar++
    }
}

console.log(`Total de número pares: ${par} \nTotal de números ímpares: ${impar}`)