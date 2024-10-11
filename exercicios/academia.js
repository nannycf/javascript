/**
 * Ficha de um aluno de academia
 * @author Professor José de Assis
 */

// variáveis
let nome
let idade
let peso
let altura
let vip
let fcm
let imc

console.clear()

// entrada de dados
nome = "José de Assis"
idade = 56
peso = 62
altura = 1.63
vip = true

// processamento
fcm = 208 - (0.7 * idade)
imc = peso / (altura * altura)

// saída
console.log("Ficha do aluno")
console.log("_____________________________")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`Vip: ${vip}`)
console.log(`FCM: ${fcm}`)
console.log(`IMC: ${imc.toFixed(2)}`)