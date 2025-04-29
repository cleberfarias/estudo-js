/**
 * Percorra a entrada com uma lista de nros e retorne qtos numeros impares/pares
 * 
 * ENTRADA:
 * [1,2,3,4,5,6,7]
 * 
 * SAIDA
 * 4 3
 */



//console.log(`${impares} ${pares}`)
var entrada = [1, 2, 3, 4, 5, 6]
let contPar = 0;
let contImpar = 0;


for (let i = 0; i <entrada.length; i++){
   
    if (entrada[i] % 2 === 0){
        contPar++;
    
    }else{
        contImpar++;
        
    }
    
}
console.log(`"Pares" ${contPar} \n"Impares:" ${contImpar}`);

