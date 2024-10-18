/**
 * Votação
 * @author Ariane Cristina 
 */

const input = require('readline-sync')

let idade
console.clear()
console.log("Verificar obrigatoridade de votação")
idade = Number(input.question("Digite a idade: "))
console.log(`Idade: ${idade}`)
if (idade < 16) {
    console.log("Proibido votar")
}
else if (idade > 17 && idade < 71) {
    console.log("voto obrigatorio")
} else {
    console.log("voto facutativo")
}