const leia = require('readline-sync')

let vetor = [], impar = [], par = [], sum = 0

for(let i=0; i<10; i++){
    let vetorNum = leia.questionInt("Digite um num: ")
    vetor.push(vetorNum)
}
for(let i=0; (i<vetor.length); i++){
    if(vetor[i]%2==0){
        par.push(vetor[i])
    }
    if(!(i%2 == 0)){
        impar.push(vetor[i])
    }
    sum += vetor[i]
}
console.log(`   \nElementos nos índices ímpares: ${impar}
                \nElementos pares: ${par}
                \nSoma: ${sum}
                \nMédia: ${sum/10}`)