const leia = require('readline-sync')

let n1 = leia.questionInt("Digite o primeiro numero do intervalo: ")
let n2 = leia.questionInt("Digite o segundo numero do intervalo: ")

if (n1 > n2) {
    console.log("Intervalo inválido!")
} else {
    console.log(`No intervalo entre ${n1} e ${n2}: `)
    for (let i = n1; (i <= n2); i++) { 
        if((i%3 == 0)&&(i%5 == 0)){
            console.log(`${i} é multiplo de 3 e 5`)
        }
    }

}
