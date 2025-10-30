const leia = require('readline-sync')

let cod, cargo, nome, salario, amount

nome = leia.question("Nome do Colaborador: ")
cod = leia.questionInt("Codigo do Cargo: ")
salario = leia.questionFloat("Salario: R$")

switch (cod) {
    case 1:
        cargo = "Gerente"
        amount = salario + (salario*0.10)
        break;
    case 2:
        cargo = "Vendedor"
        amount = salario + (salario*0.07)
        break;
    case 3:
        cargo = "Supervisor"
        amount = salario + (salario*0.09)
        break;
    case 4:
        cargo = "Motorista"
        amount = salario + (salario*0.06)
        break;
    case 5:
        cargo = "Estoquista"
        amount = salario + (salario*0.05)
        break;
    case 6:
        cargo = "Tecnico de TI"
        amount = salario + (salario*0.08)
        break;
}
console.log(`Nome do colaborador: ${nome} \nCargo: ${cargo} \nSalário: R$${amount}`)