/**
 * Faça um programa que faça a soma de todos os números de uma lista de números
 * 
 * ENTRADA              SAÍDA
 * [1,3,5,7,8,10,3]     10
 * [1,1,40]             40
 * [40,1,1,0,-10]       40
 */

// Entrada

var entrada = [];
var soma = 0;

for (let i = 0; i < 10; i++) {
  let numero = Math.floor(Math.random() * 99);
  entrada.push(numero);
}

for (let i = 0; i < entrada.length; i++) {
  soma += entrada[i];
  
}

let ordenacao = [...entrada].sort((a,b) => b - a)


var media = soma / entrada.length;
var maior = Math.max(...entrada)

var segundoMaior = ordenacao.find(n => n <ordenacao[0])

console.log("Os números do array são:", entrada);
console.log("Média:", media.toFixed(1));
console.log("As somas dos numeros dentro do array são:", soma);
console.log("Esse é o maior número do array", maior);
console.log("Segundo maior número:", segundoMaior);
