/**
 * Faça um Programa que inverta um texto. 
 * 
 * ENTRADA          SAÍDA
 * abacate          etacaba
 * 12345            54321
 * 
 */

// Entrada

function inverterTexto(texto){
    return texto.split('').reverse().join('')
}
var entrada = 'Cleber'
// gere a variável invertido de forma a transforma a entrada na saída esperada
var invertido = inverterTexto(entrada)


console.log(invertido)