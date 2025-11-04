import { Stack } from "../assets/Stack"
import readlinesync = require("readline-sync")

const pilha: Stack<string> = new Stack<string>()
let option: number
let replay: boolean = true

while (replay) {
    console.log(`\n\n*******************************************************\n\n1 - Adicionar Livro na Pilha\n2 - Listar todos os Livros\n3 - Retirar Livro da Pilha\n0 - Sair\n\n*******************************************************\n`)
    option = readlinesync.questionInt('Entre com a opcao desejada: ')
    if (option >= 0 && option <= 3) {
        switch (option) {
            case 0:
                replay = false
                console.log("Programa finalizado!")
                break;
            case 1:
                pilha.push(readlinesync.question("Digite o nome do Livro: "))
                console.log(`\nLivro Adicionado!\nPilha: `)
                pilha.printStack()
                break;
            case 2:
                if (pilha.isEmpty()) {
                    console.log("A Pilha se encontra vazia no momento")
                } else {
                    console.log(`Lista de Livros na Pilha:`)
                    pilha.printStack()
                }
                break;
            case 3:
                if (pilha.isEmpty()) {
                    console.log("A Pilha se encontra vazia no momento")
                } else {
                    pilha.pop()
                    console.log(`Um Livro foi retirado da pilha! \nPilha: `)
                    pilha.printStack()
                }
                break;
        }
    } else {
        console.log("Digite um numero entre as opções acima")
    }
}
