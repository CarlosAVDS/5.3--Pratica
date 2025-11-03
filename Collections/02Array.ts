import readlinesync = require("readline-sync")

const list: Array<number> = new Array<number>(2,5,1,3,4,9,7,8,10,6)
let quest: number;

quest = readlinesync.questionInt("Digite o numero que voce deseja encontrar: ")
if(list.indexOf(quest)!= -1){
    console.log(`O número ${quest} está localizado na posição: ${list.indexOf(quest)}`)
}else{
    console.log(`O número ${quest} não foi encontrado!`)
}