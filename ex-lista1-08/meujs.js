/**
 * Faça um Programa que verifique se uma letra
 * de entrada é vogal ou consoante.
 *
 * Entrada           Saída
 * a                 vogal
 * I                 vogal
 * z                 consoante
 * J                 consoante
 */

// Entrada
var entrada = "C";

var vogais = ["a", "e", "o", "u", "A", "E", "I", "O", "U"];

var resultado = false;

if (vogais.includes(entrada)) {
  resultado = true;
}
if (resultado === true) {
  console.log(entrada, "é uma vogal");
} else {
  console.log(entrada, "é uma consoante");
}
