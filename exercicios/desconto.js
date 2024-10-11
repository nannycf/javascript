/**
 * Cálculo do valor do desconto
 * @author Professor José de Assis
 */

const input = require('readline-sync')

let totalDesconto, total, desconto

console.clear()
console.log("Cálculo do valor do desconto")

//entrada
total = Number(input.question("Digite o valor da compra: "))
desconto = Number(input.question("Digite o valor do desconto em %: "))

//processamento
totalDesconto = total - ((desconto * total) / 100)

//saida
console.log(`total com desconto: R$ ${totalDesconto.toFixed(2)}`)