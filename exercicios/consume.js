/**
 * Consumo de gasolina
 * @author Ariane Cristina
*/

const input = require ("readline-sync")



let  gasolina, alcool

console.clear()
console.log ("Qual a melhor opção?")

alcool = Number(input.question("Digite o valor de alcool (valor por litro): "))
gasolina = Number(input.question("Digite o valor de gasolina (valor por litro): "))

consumo = alcool / gasolina 

if (alcool < 0,7 * gasolina) // se alcool for menos que 0.7 que a gasolina (prcossamento e saída juntos)
{
    console.log("Melhor abastecer com Àlcool")
} else {
    console.log("Melhor abastecer com gasolina")
}