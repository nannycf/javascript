/**
 * Calculo do cu=onsume de agua
 * @author Ariane Cristina
 */

const input= require ('readline-sync')

let consumo,peso

console.clear()
console.log ("Cálcule seu consumo diário de agua")

peso= Number(input.question("Digite o seu peso em KG: "))

consumo = peso * 0.035

console.log(`Consumo diário de aguá deve ser: ${consumo.toFixed(2)}`)