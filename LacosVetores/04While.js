const leia = require('readline-sync')

let age, gen, stack, replay = true, cond1 = 0, cond2 = 0, cond3 = 0, cond4 = 0, total = 0, totalAge = 0

while (replay) {
    age = leia.questionInt("Digite a sua idade: ")
    gen = leia.questionInt("Digite sua identidade de Gênero: \n[1] - Mulher Cis\n[2] - Homem Cis\n[3] - Nao Binario\n[4] - Mulher Trans\n[5] - Homem Trans\n[6] - Outros \n")
    stack = leia.questionInt("Digite seu Tipo de Pessoa Desenvolvedora: \n[1] - BackEnd\n[2] - FrontEnd\n[3] - Mobile\n[4] - FullStack \n")
    replay = leia.keyInYNStrict("Deseja continuar? ")

    switch (stack) {
        case 1:
            cond1++
            break;
        case 2:
            if ((gen == 1) || (gen == 4)) {
                cond2++
            }
            break;
        case 3:
            if (((gen == 2) || (gen == 5)) && age > 40) {
                cond3++
            }
            break;
        case 4:
            if ((gen == 2)  && age < 30) {
                cond4++
            }
            break;
    }

    total++
    totalAge = totalAge + age
}
console.log(`
        \nTotal de pessoas desenvolvedoras Backend: ${cond1}
        \nTotal de Mulheres Cis e Trans desenvolvedoras Frontend: ${cond2}
        \nTotal de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${cond3}
        \nTotal de Pessoas Não Binárias desenvolvedoras FullStack menores de 30 anos: ${cond4}
        \nO número total de pessoas que responderam à pesquisa: ${total}
        \nA média de idade das pessoas que responderam à pesquisa: ${totalAge / total}
    `)
