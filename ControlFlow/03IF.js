const leia = require('readline-sync')

let nome, idade, doador

nome = leia.question("Digite o Nome do doador: ")
idade = leia.questionInt("Digite a Idade do doador: ")
doador = leia.keyInYNStrict('Primeira doacao de sangue?')

if ((idade >= 18) && (idade <= 69)) {
    if (((idade >= 60) && (idade <= 69)) && (doador)) {
        console.log(`${nome} não está apto para doar sangue!`)
    } else {
        console.log(`${nome} está apto para doar sangue!`)
    }
} else {
    console.log(`${nome} não está apto para doar sangue!`)
}

