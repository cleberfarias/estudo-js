/**
 * Faça um programa que percorra uma lista e gere um outra lista com o
 * mesmo numero de elementos no formato: 'impar' ou 'par' 
 * 
 * ENTRADA          SAÍDA
 * [1,3,5,7,8]      ['impar', 'impar', 'impar', 'impar', 'par']
 */

var entrada = []
var impar = []
var par =[]

for (let i = 0; i < 10; i++) {
    let numero = Math.floor(Math.random() * 11);
    entrada.push(numero);
}

for (let i = 0; i <entrada.length; i++){
   
    if (entrada[i] % 2 !== 0){
        impar.push(entrada[i]);
        
    
    }else{
        par.push(entrada[i])
        
        
    }
    
}

console.log("Estes números são ímpares:", impar, "e estes são pares:", par);