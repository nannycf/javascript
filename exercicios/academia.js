/**
*Ficha de um aluno de academia
* @author Ariane Cristina
*/

// variáveis
    let nome
    let idade
    let peso
    let altura
    let VIP
    let fcm
    let imc


console.clear()

//entrada de dados
nome = "Ariane Cristina"
idade = 30
peso = 80
altura = 1.55   
VIP = true
// processamento
fcm= 208 - (0.7 * idade)
imc= peso / (altura * altura)

// saída
console.log("Ficha do aluno")
console.log("________________________")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`VIP: ${VIP}`)
console.log(`FCM: ${fcm}`)
console.log(`IMC: ${imc.toFixed(2)}`)



