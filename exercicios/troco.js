/**
 * Calculadora de troco
 * @author Ariane Cristina
 */

const input = require ('readline-sync')

//variaveis
let troco, valorPago, total



console.clear()
console.log("Calculo valor do troco")

//entrada
valorPago = Number(input.question("digite o valor pago: "))
total = Number(input.question("digite o valor da compra: "))

//processamento
troco= valorPago - total

//saída
console.log (`troco: R$ ${troco.toFixed(2)}`)