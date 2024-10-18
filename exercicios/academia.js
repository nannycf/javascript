/**
 * Ficha de um aluno de academia
 * @author Professor José de Assis
 */



const input= require('readline-sync')
const colors= require('colors')

// variáveis
let nome, idade, peso, altura, fcm, imc




console.clear()
//banner

console.log("/$$                           /$$   /$$                               /$$                     /$$             /$$                        ")
console.log("| $$                          | $$  | $$                              | $$                    | $$            | $$                        ")
console.log("| $$$$$$$   /$$$$$$   /$$$$$$ | $$ /$$$$$$          /$$$$$$$  /$$$$$$ | $$  /$$$$$$$ /$$   /$$| $$  /$$$$$$  /$$$$$$    /$$$$$$   /$$$$$$ ")
console.log("| $$__  $$ /$$__  $$ |____  $$| $$|_  $$_/         /$$_____/ |____  $$| $$ /$$_____/| $$  | $$| $$ |____  $$|_  $$_/   /$$__  $$ /$$__  $$")
console.log("| $$  \\ $$| $$$$$$$$  /$$$$$$$| $$  | $$          | $$        /$$$$$$$| $$| $$      | $$  | $$| $$  /$$$$$$$  | $$    | $$  \\ $$| $$  \\__/")
console.log("| $$  | $$| $$_____/ /$$__  $$| $$  | $$ /$$      | $$       /$$__  $$| $$| $$      | $$  | $$| $$ /$$__  $$  | $$ /$$| $$  | $$| $$      ")
console.log("| $$  | $$|  $$$$$$$|  $$$$$$$| $$  |  $$$$/      |  $$$$$$$|  $$$$$$$| $$|  $$$$$$$|  $$$$$$/| $$|  $$$$$$$  |  $$$$/|  $$$$$$/| $$      ")
console.log("|__/  |__/ \\_______/ \\_______/|__/   \\___/         \\_______/ \\_______/|__/ \\_______/ \\______/ |__/ \\_______/   \\___/   \\______/ |__/      ")

console.log("")

// entrada de dados
nome= input.question ("Digite o seu nome: ")
idade= Number(input.question ("Digite sua idade: "))
peso= Number(input.question ("Digite o seu peso em Kg: "))
altura= Number(input.question ("Digite sua altura em metros: "))




// processamento
fcm = 208 - (0.7 * idade)
imc = peso / (altura * altura)
consumo = peso * 0.035

// saída
console.log('')
console.log("Ficha do aluno")
console.log("_____________________________")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`FCM: ${fcm}`)
console.log(`IMC: ${imc.toFixed(2)}`)

//tabela imc
if (imc < 18.5) {
    console.log("Abaixo do Peso".cyan)
} else if (imc < 25) {
    console.log("Peso Normal".green)
} else if (imc < 30) {
    console.log("Levemente acima do peso".yellow)
} else if (imc < 35) {
    console.log("Obesidade Grau I".magenta)
} else if (imc < 40) {
    console.log("Obesidade Grau II (severa)".red)
} else {
    console.log("Obesidade Grau III (morbida)".bgRed)
}

console.log(`Consumo diário de aguá deve ser: ${consumo.toFixed(3)}`)