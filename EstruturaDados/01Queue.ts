import { Queue } from "../assets/Queue";
import readlinesync = require("readline-sync")

const fila: Queue<string> = new Queue<string>()
let option: number
let replay: boolean = true

while (replay) {
    console.log(`\n\n*******************************************************\n\n1 - Adicionar Cliente na Fila\n2 - Listar todos os Clientes\n3 - Retirar Cliente da Fila\n0 - Sair\n\n*******************************************************\n`)
    option = readlinesync.questionInt('Entre com a opcao desejada: ')
    if (option >= 0 && option <= 3) {
        switch (option) {
            case 0:
                replay = false
                console.log("Programa finalizado!")
                break;
            case 1:
                fila.enqueue(readlinesync.question("Digite o nome do Cliente: "))
                console.log(`\nCliente Adicionado!\nFila: `)
                fila.printQueue()
                break;
            case 2:
                if (fila.isEmpty()) {
                    console.log("A fila se encontra vazia no momento")
                } else {
                    console.log(`Lista de Clientes na Fila:`)
                    fila.printQueue()
                }
                break;
            case 3:
                if (fila.isEmpty()) {
                    console.log("A fila se encontra vazia no momento")
                } else {
                    fila.dequeue()
                    console.log(`Fila: `)
                    fila.printQueue()
                }
                break;
        }
    } else {
        console.log("Digite um numero entre as opções acima")
    }
}
