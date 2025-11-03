const leia = require('readline-sync')

let dica1, dica2, dica3

dica1 = leia.question("Digite a primeira Caracteristica: ")
dica2 = leia.question("Digite a segunda Caracteristica: ")
dica3 = leia.question("Digite a terceira Caracteristica: ")

if (dica1 == "vertebrado") {
    if (dica2 == "ave") {
        if (dica3 == "carnivoro") {
            console.log("Águia")
        } else { console.log("Pomba") }
    } else if (dica2 == "mamifero") {
        if (dica3 == "onivoro") {
            console.log("Homem")
        } else { console.log("Vaca") }
    }
} else {
    if (dica2 == "inseto") {
        if (dica3 == "hematofago") {
            console.log("Pulga")
        } else { console.log("Lagarta") }
    } else if (dica2 == "anelideo") {
        if (dica3 == "hematofago") {
            console.log("Sanguessuga")
        } else { console.log("Minhoca") }
    }
}

