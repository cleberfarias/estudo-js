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
