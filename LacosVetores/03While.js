const leia = require('readline-sync')

let age, neg = false, old = 0, newer = 0

while (!neg) {
    age = leia.questionInt("Digite uma idade: ")
    if (age < 0) {
        neg = true
        console.log(`Total de pessoas menores de 21 anos: ${newer} \nTotal de pessoas maiores de 50 anos: ${old}`)
    } else {
        if (age < 21) {
            newer++
        }
        if (age > 50) {
            old++
        }
    }
}