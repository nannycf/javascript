/**
 * Exemplo de uso do método para gerar números aleatórios
 * Jogo do dado
 * @autthor Ariane Cristina
 */

const input= ('redline-sync')

let face

console.clear()
console.log ("Jogo do dado")
input.question ("Pressione a tecla [Enter] para jogar o dado")

//Sorteio da face de dado
//Match classe matematica
//floor() conversão para numeros inteiros
//random () * (gerador de números aleatorios)

face = Math.floor(Math.random() * 6 + 1) //sorteio de numero 0 á 5

console.log (`Face do dado: ${face}`)

