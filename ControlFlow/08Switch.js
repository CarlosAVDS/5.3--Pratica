const leia = require('readline-sync')

let cod, valor, saldo = 1000.00

cod = leia.questionInt("Operacao: \n[1]Saldo \n[2]Saque \n[3]Deposito \n")
if (cod != 1 && cod <= 3) {
    valor = leia.questionFloat('Digite o valor: R$')
}

switch (cod) {
    case 1:
        console.log("Operação - Saldo\nSeu saldo é de: R$ 1000.00")
        break;
    case 2:
        if (saldo < valor) {
            console.log("Operação - Saque\nSaldo insuficiente!")

        } else {
            saldo = (saldo - valor)
            console.log(`Operação - Saque\nNovo Saldo: R$ ${saldo}`)
        }
        break;
    case 3:
        saldo = (saldo + valor)
        console.log(`Operação - Depósito\nNovo Saldo: R$ ${saldo}`)
        break;
    default:
        console.log("Operação inválida!")
        break;
}


