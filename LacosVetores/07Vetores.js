const leia = require('readline-sync')

let vetor = [2,5,1,3,4,9,7,8,10,6], num
num = leia.questionInt("Digite o numero que voce deseja encontrar: ")
for(let i = 0; (i<=vetor.length); i++){
    if(num == vetor[i]){
        console.log(`O número ${num} está localizado na posição: ${i}`)
        break
    }else if(i == vetor.length){
        console.log(`O número ${num} não foi encontrado!`)
    }
}
