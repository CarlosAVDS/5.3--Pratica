const leia = require('readline-sync')

let cod, qtd, prod, amount, total

cod = leia.questionInt("Codigo do Produto: ")
qtd = leia.questionInt("Quantidade")

switch (cod) {
    case 1:
        prod = "Cachorro quente"
        amount = 10.00
        break;
    case 2:
        prod = "X-Salada"
        amount = 15.00
        break;
    case 3:
        prod = "X-Bacon "
        amount = 18.00
        break;
    case 4:
        prod = "Bauru"
        amount = 12.00
        break;
    case 5:
        prod = "Refrigerante"
        amount = 8.00
        break;
    case 6:
        prod = "Suco de laranja"
        amount = 13.00
        break;
}
total = amount * qtd
console.log(`Produto: ${prod} \nValor Total: R$${total}`)

