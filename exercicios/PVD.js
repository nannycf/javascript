/**
 * Calculo de ponto de venda
 * @author Ariane Cristina
 */

const input = require('readline-sync')



//variaveis
let total, desconto, totalDesconto, valorDesconto, valorPago, troco


console.clear()

//console.log("\\") //ele imprime uma bara /n ele quebra linha


console.log(".-------.  ______     ,---.  ,---. ")
console.log("\\  _(`)_ \\|    _ `''. |   /  |   | ")
console.log("| (_ o._)|| _ | ) _  \\|  |   |  .' ")
console.log("|  (_,_) /|( ''_'  ) ||  | _ |  |  ")
console.log("|   '-.-' | . (_) `. ||  _( )_  |  ")
console.log("|   |     |(_    ._) '\\ (_ o._) /  ")
console.log("|   |     |  (_.\\.' /  \\ (_,_) /   ")
console.log("/   )     |       .'    \\     /    ")
console.log("`---'     '-----'`       `---`     ")

console.log ("")


//entrada 1
total= Number(input.question("Digite o valor total da compra: "))
desconto= Number(input.question("Digite o valor do desconto em %: "))

//processamento 1

valorDesconto = (desconto * total) / 100 //valor que o cliente vai receber de desconto

//processamento 2 
totalDesconto = total - valorDesconto

//saída1
console.log ("")
console.log ("---------------------")
console.log (`Total: R$ ${total.toFixed(2)}`)
console.log (`Desconto: ${desconto}%`)
console.log (`Valor do desconto: R$ ${valorDesconto.toFixed(2)}`)
console.log (`Total com desconto: R$ ${totalDesconto.toFixed(2)}`)

console.log("")


//entrada 2
valorPago = Number(input.question("Digite o valor pago em dinheiro: "))

//processamento 3
troco = valorPago - totalDesconto

//saída2
console.log("")
console.log(`Valor Pago em dinheiro: R$ ${valorPago.toFixed(2)}`)
console.log(`Troco: R$ ${troco.toFixed(2)}`)
console.log ("-------------------------------")


