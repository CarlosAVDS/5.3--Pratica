const leia = require('readline-sync')

let n1, n2, n3, soma

n1 = leia.questionInt('Digite o número A: ')
n2 = leia.questionInt('Digite o número B: ')
n3 = leia.questionInt('Digite o número C: ')
soma = n1 + n2

if((n1+n2) > n3){
    console.log(`\n${n1} + ${n2} = ${soma} > ${n3} \nA Soma de A + B é Maior do que C`)
}else if((n1+n2) < n3){
    console.log(`\n${n1} + ${n2} = ${soma} < ${n3} \nA Soma de A + B é Menor do que C`)
}else{
     console.log(`\n${n1} + ${n2} = ${soma} = ${n3} \nA Soma de A + B é igual a C`)
}
