/**
 * Sintaxe básica da línguagem JS
 * @author Ariane Cristina
 */


// Limpar a tela do console

// JS- SEntença e ; opcional
 
console.log 
("Hello World");


let nome= "Ariane Cristina"
let idade= 30
let altura= 1.55 // o ponto é usado para casas decimais

// typeof () é usado para identificar o tipo de variável
console.log (typeof(nome))
console.log (typeof(idade))
console.log(typeof(altura))

// identificando variaveis inteiras e não inteiras
console.log (Number.isInteger(idade)) //"este numero é inteiro?"
console.log (Number.isInteger(altura))



// concatenação (unir textos e váriaveis)

console.log (`nome: ${nome}`)
console.log ("nome: " + nome) // não recomendado 



//arrendondamento (casas decimais)

let media = 5.789
console.log (`Média: ${media.toFixed(1)}`)

//particularidades do JS
console.log(10 / 0)
console.log(0.5 + 0.5)
console.log(0.1 + 0.2)
console.log ("3"+2)
console.log("3" - 2) //JS SE PERDE
console.log("3x" -2) //erro.. NaN (não consegue efetuar operação matematica)

