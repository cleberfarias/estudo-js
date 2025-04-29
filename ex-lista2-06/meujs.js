/**
 * Faça um programa que gere apenas os números ímpares entre 1 e 150. 
 * 
 * ENTRADA              SAÍDA
 * [1,150]              [1,3,5,7,9,11...147,149]
 * 
 */

// Entrada
var entrada = [];
var impares= []
var soma = 0;

for (let i = 0; i < 10; i++) {
  let numero = Math.floor(Math.random() * 99);
  entrada.push(numero);
}

for (let i = 0; i < entrada.length; i++) {
  soma += entrada[i];
  impares.push(entrada[i]);
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
console.log('Os numeros impares são:', impares)