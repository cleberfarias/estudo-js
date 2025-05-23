/**
 * Faça um Programa que calcule a média das notas bimestrais.
 * 
 * ENTRADA                           SAÍDA
 *    10, 8, 9.5, 7, 10              8.9
 *    8, 8, 8                        8.0
 *    7, 5, 5.5, 6, 5                5.7
 * 
 * Tarefa:
 * - Crie um loop para percorrer todas as notas e armazene na variável total
 * - Veja como pegar a quantidade notas através do tamanho da lista
 * - Use a variável media para fazer o cálculo total / quantidade de notas
 * - Use o comando abaixo para testar seu programa
 * 
 *   $ node lista-01/js03-media-bimestral.js
 *   👉 a média das 5 notas do bimestre é 8.9
 * 
 *  - Teste para mais dados de entrada diferentes e verifique que o cálculo está correto
 *  - Veja como é feito para mostrar sempre 1 casa decimal
 *  - O que aconteceria se não tivesse o .toFixed com a entrada [7, 5, 5.5, 6, 5.1]
 * 
 *  DICA:
 *   - Veja o vídeo seguinte de repetições para conseguir percorrer todas as notas
 *  EXTRA:
 *  - Como fazer para Mostrar APROVADO/REPROVADO no final (p/nota de corte = 7)
 */

// Entrada
const notas = [10, 8, 9.5, 7, 10]

let total = 0;
quantidadeDeNotas = notas.length
// Faça um loop para achar o total de notas

for (var i = 0; i < notas.length; i++){
    total += notas[i];
    
}

media = total / quantidadeDeNotas

var resultado = '👉 a média das ' + quantidadeDeNotas + ' notas do bimestre é ' + media.toFixed(1)

console.log(resultado)