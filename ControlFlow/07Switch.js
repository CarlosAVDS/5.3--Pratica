const leia = require('readline-sync')

let n1, n2, cod, result, sinal

n1 = leia.questionFloat("Digite o primeiro numero: ")
n2 = leia.questionFloat("Digite o segundo numero: ")
cod = leia.questionInt("Operação: \n[1] Soma \n[2]Subtracao \n[3]Multiplicacao \n[4]Divisao \n")


switch (cod) {
    case 1:
        result = n1 + n2
        sinal = '+'
        break;
    case 2:
        result = n1 - n2
        sinal = '-'
        break;
    case 3:
        result = n1 * n2
        sinal = '*'
        break;
    case 4:
        result = n1 / n2
        sinal = '/'
        break;
    default:
        console.log("Operação invalida!")

}
if(sinal != undefined)console.log(n1,sinal,n2,'=', result)

    