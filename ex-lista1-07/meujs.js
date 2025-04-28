/**
 * Faça um programa que retorne true ou false conforme a entrada Y,y,yes,S,sim
 *
 * ENTRADA                   SAÍDA
 * Y                         true
 * Yes, YES, yes             true
 * y                         true
 * S, SIM                    true
 * s, sim, Sim               true
 * 1                         true
 * 👍                        true
 * n,N,J,0, espaço           false
 * qualquer outra coisa, $   false
 */

// Entrada
var entrada = "Y";

var resultado = false

if (entrada === "Y" || entrada === "y" || entrada === "yes" || entrada === "S" || entrada === "sim") {
    resultado = true;
}


console.log(resultado);