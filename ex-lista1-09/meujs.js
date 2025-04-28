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
/**
 * Faça um Programa que dado um número de entrada,
 * exiba o dia correspondente da semana.
 * 
 * ENTRADA      SAÍDA
 * 1            Domingo
 * 2            Segunda
 * 3            Terça
 * ...
 * 7            Sábado
 * Se digitar outro valor deve aparecer: 'Entrada inválida.'
 */

// Entrada
var entrada = 8

var diaDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']


if(entrada >=1 && entrada <=7){
    console.log('O dia da semana é:',diaDaSemana[entrada -1]);
}else{
    console.log('dia inválido')
}
