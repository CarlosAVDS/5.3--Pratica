import readlinesync = require("readline-sync")

const list: Set<number> = new Set<number>([2,5,1,3,4,9,7,8,10,6])
let quest: number;

quest = readlinesync.questionInt("Digite o numero que voce deseja encontrar: ")
if(list.has(quest)){
    console.log(`O número ${quest} foi encontrado!`)
}else{
    console.log(`O número ${quest} não foi encontrado!`)
}