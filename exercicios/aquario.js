/**
 * Cálculo do volume de um aquário
 * @author Ariane Cristina
 */
  
  const input = require ('readline-sync')

  // variaveis

  let comprimento, largura, altura, volume
  console.clear ()
  console.log ("Cálculo do volume de um aquário")

  //entrada
  comprimento = Number(input.question("digite o comprimento em cm: "))
  largura = Number(input.question("digite a largura em cm: "))
  altura = Number(input.question("digite a altura em cm: "))
  
  //processamento
  volume=( comprimento*largura*altura) /1000

  //saída
  console.log (`volume do aquário: ${volume.toFixed(2)} litros`)

  

  