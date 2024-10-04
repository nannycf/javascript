/**
 * Calculo do valor do desconto
 * @author Ariane Cristina
 */

const input = require ('readline-sync')

// variaveis
let totalDesconto, total, desconto

console.clear()
console.log ("Calculo do valor do desconto")

//entrada

total = Number(input.question("digite o valor da compra: "))
desconto = Number(input.question("digite o valor do desconto em %: "))

//processamento
totalDesconto = total - ((desconto * total) / 100)


//saída
console.log (`total com Desconto: R$ ${totalDesconto.toFixed(2)}`)


