import readlinesync = require("readline-sync")

const list: Array<string> = new Array<string>();
let color: string;

for(let i = 0; i<5; i++){
    color =  readlinesync.question("Digite a cor: ")
    list.push(color)
}
console.log(`\nListar todas as cores: ${list} \nOrdenar as cores: ${list.sort()}`)