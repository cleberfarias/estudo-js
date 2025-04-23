/**
 * String como arrays no JS
 * 
 * 
 * 
 */

console.log("1)", "100" + "200"); 
console.log("2)", parseInt("100") + parseInt('200')); // transformou em numeros inteiros
console.log("3)", 100 + 200);
console.log("4)", parseInt("100") + 200);
console.log("5)", parseFloat(100.5) + parseFloat(200.6)); //transformou em dois numeros flutuantes 
console.log("6)", parseFloat(100.5) - 200);

let num = 100.555656675756
console.log(num.toString()); // transformou em string
console.log(num.toFixed(2)) // converteu em duas casas decimais 