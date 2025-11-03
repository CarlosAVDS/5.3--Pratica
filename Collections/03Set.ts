import readlinesync = require("readline-sync")

const list: Set<number> = new Set<number>([])
let quest: number

for(let i=0; i<10; i++){
    quest = readlinesync.questionInt(`Digite o ${i+1} numero:`)
    list.add(quest)
}
for(let element of list){
    console.log(element)
}