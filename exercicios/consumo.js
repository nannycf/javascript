/**
 * Calculo do consumo de combustível 
 * @author Ariane Cristina
 */

const input = require ('readline-sync')
//variaveis

let distancia, litros, consumo
console.clear ()
console.log ("Cálculo do consumo de combustível")

//entrada
distancia = Number (input.question ("Distancia de litros de combustível:"))

// processamento
consumo = distancia / litros

//saída

console.log (`consumo do veículo: ${consumo.toFixed (1)} km/l`)



