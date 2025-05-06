# estudo-js
Projeto para aprender JS seus fundamentos (aprimoramento) 

## Fundamentação JS
-onde pode rodar o JS
-Sintaxe e Lógica de Programação
# Comentário
Aula 4 - Comentário
meira para executar um dialogo 
// se quer comentar uma linha 
*/  */ se quer comentar um bloco de código 
# Sintaxe e Caracteres 
Aula 5 ; para finalizar a linha de código, hoje não é mais necessário  
Ex: console.log("Resultado:" + soma)- não precisa do (;)  
na mesma linha console.log("Resultado:" + soma);console.log("Resultado:" + soma)console.log("Resultado:" + soma)  
nesse caso precisa!  
(,) e (.) virgula sepra os valores ponto é para separa o decimal : console.log("Valor:", 2.2 + 2.6)  
/  e duas // fora do escopo duas barras é comentário e um barra no meio de dois números é uma expressão : console.log("Valor:", 80 / 2) // comentário  
| barra vertical      || para fazer ou  
“ ou ‘ simples: console.log("Meu nome é:", 'O valor \'Joseé Luiz\' é uma String')  
(``) usado para interpolação de string  (`${}`

# Case sensitivity 

nomes de Varíavel  - tem que ser igual se for maíucolo ou minúsculo.  
snake_case : joao_lima  
PascalCase : JoaoLima  
kebab-case : joao-lima  
camelCase  : joaoLima  

# Tipos de dados 
* Imutaveis ( não podem ser alterados) e dados do nivel de baixo da Linguagem 
 - String type  
 - Number type  
 - Bolean type  
 - Null type  
 - Undefined type  
# Declaração e atribuição de variáveis
var texto (definição) fiz a definição de uma variável  
texto = “JavaScript” (Atribuição) atribui um valor para a   definição da variável  
# Escopos (var, let e const)
Diferença entre var, let e const.
let - mais indicado para definir uma variável não deixa usar o mesmo nome de variável (escopo mais fechado)  
var - ele deixar chamar no console.log mesmos estando fora do escopo(escopo mais aberto)  
const - como diz o nome ela é uma constante, portanto não pode ser alterada.  
# palavras reservadas - 
listas de palavras reservadas do JS https://www.w3schools.com/js/js_reserved.asp  
não pode ser utilizado em qualquer lugar do código somente no lugar correto de forma correta  conforme a sintaxe
# Operadores Aritméticos
- tipos de operadores e a forma de utilizalos  
# Tipo String e suas operações
-documentação de tipos de strig e operações  
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String
 
# Arrays e operadores
- Arrays são um metodo de lista, onde pode ser de vairos tipos como Strings, numeros entre outros.  
- e percorremos os elementos atraves de indice, iniciando do 0, exemplo o primeiro elemento está no indice 0.  
- Elementos de um array são propriedades de objeto da mesma forma que toStringuma propriedade (para ser mais específico, porém, toString()é um método).  
# Strings como Arrays
- String como arrays os elementos não podem ser alterados, e sim, podem ser mensionados pelo indice, pois uma string são imutáveis  
# Conversão de tipos
- Conversão de Tipo (ou typecasting) significa transferência de dados de um tipo de dado para o outro. A conversão implícita ocorre quando o compilador atribui automaticamente os tipos de dados, mas o código fonte também pode explicitamente exigir uma conversão de tipo. Por exemplo, dada a instrução 5+2.0, o float 2.0 será implicitamente convertido para integer, mas dada a instrução Number("0x11"), a string "0x11" será explicitamente convertida para o número 17.
# Desvios condicionais
-If else, são usados para fazerem um desvio condidional usando a logica booleana
#  tabela verdade && e ||
TABELA VERDADE ( E && )  
 f · f := f  
 f · v := f  
 v · f := f  
 v · v := v ...(***)  
 
TABELA VERDADE ( OU || )  

f · f := f ...(***)  
f · v := v  
v · f := v  
v · v := v  
# Repetições (for, for in, for of e forEach)
for — "para"  
Esse é o for clássico do JavaScript. Ele funciona com um contador (indice), que começa em 0 e vai até o tamanho da lista (listaUm.length), passando por todos os elementos da lista.  Uso: Esse tipo de laço é mais flexível e pode ser usado em muitos cenários, pois você tem total controle sobre o índice e pode, por exemplo, manipular o índice de maneiras específicas.  

for...in — "para cada índice em" (objetos ou arrays)  
O for...in é usado para percorrer os índices ou propriedades de um objeto. Nesse caso, indice vai representar o índice do array e não o valor. Uso: Embora o for...in funcione com   arrays, ele foi projetado para percorrer propriedades de  

for...of — "para cada valor de" (arrays, strings, etc.)  
O for...of é usado para percorrer os valores de um array ou de qualquer objeto iterável (como Map, Set, etc.). Diferente do for...in, ele não retorna os índices, mas sim os valores   dos elementos. Uso: O for...of é ideal quando você não se importa com os índices e só quer trabalhar diretamente com os valores.  

forEach — "para cada um" (arrays)  
O forEach é um método do JavaScript que percorre todos os elementos de um array e executa uma função de callback para cada um deles. A função é chamada com o valor do elemento atual   como argumento. Uso: O forEach é ótimo para percorrer arrays quando você não precisa de controle sobre o índice ou quer apenas executar um bloco de código para cada elemento. Ele é   mais conciso que o for tradicional.  
## Função
-Toda função tem que ter   
--Chamada  
--parâmetro onde vai ser incrementado no chamada( não necessariamente)  
--a ação que vai executar o parâmetro  
--e o retorno onde vai armazenar o resultado do parâmetro(não necessariamente)  
## Objetos
Objetos são basicamente variáveis com muitos valores dentro. Envolvido por Chaves  
 
Os válores dentro de um objeto são chamados de propriedades  
 
Objetos também podem ter métodos. Um Método é uma função clocadas dentro de uma propriedade  

O Objeto é sempre composto de conjunto de chave e valor 