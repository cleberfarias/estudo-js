/**
 * Faça um Programa que peça a temperatura em Fahrenheit, 
 * transforme e mostre graus Celsius. 
 * 
 * ENTRADA              SAÍDA
 * 102                  39
 * 89                   32
 * 70                   21
 */

// Entrada
var fahrenheit = 89

var celsius =  (fahrenheit - 32) * 5 / 9;


console.log(fahrenheit + 'ºF = ' + celsius.toFixed(2)+ "ºC")



var celsius2 = 45;
var fahrenheit2 = (celsius2 * 9 / 5) + 32;


console.log(celsius2 + 'ºC = ' + fahrenheit2.toFixed(2)+ "ºF")