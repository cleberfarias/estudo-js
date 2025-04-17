/**
 * Definição e atribuição
 */

var textoSemAtribuicao = // sem atribuição valor undefined

console.log(textoSemAtribuicao)

let texto = "João" // atribuição de texto é joão

console.log(texto)


let pessoa = "João Lima"
let anoNascimeno = 1980
let anoAtual = 2025

let idade = anoAtual - anoNascimeno
let resultadoInicial = `A idade de ${pessoa} no ano de ${anoAtual} é ${idade}`

console.log(resultadoInicial)

let novoAno= anoAtual +5 
let idadeFututra = novoAno - anoNascimeno
let resultado = `A idade em ${novoAno} será de ${idadeFututra} ao invés de ${idade}`

console.log(resultado)

var lista = [1,2,3,4,5]
var soma = 0

for(var item in lista){
    soma = soma + lista[item]
    var text = `soma atual: ${soma} `
    console.log(text)
}
console.log('item -->', item)
console.log('texto -->', text)
console.log('soma -->', soma)

const MOEDA = "$"

MOEDA = "u$"

console.log(MOEDA)