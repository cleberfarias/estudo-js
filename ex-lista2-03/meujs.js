/**
 * Faça um programa que faça a soma de todos os números de uma lista de números
 *
 * ENTRADA              SAÍDA
 * [1,3,5,7,8,10]        5.7
 * [1,1,40]             14.0
 */

// Entrada

var entrada = [];
var soma = 0;

for (let i = 0; i < 10; i++) {
  let numero = Math.floor(Math.random() * 11);
  entrada.push(numero);
}

for (let i = 0; i < entrada.length; i++) {
  soma += entrada[i];
}
var media = soma / entrada.length;

console.log("Os números do array são:", entrada);
console.log("Média:", media.toFixed(1));
console.log("As somas dos numeros dentro do array são:", soma);
