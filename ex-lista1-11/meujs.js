/**
 * Faça um programa que faça o inverso do programa anterior, ou seja,
 * dado uma entrada criptografada, gere o texto decriptografado
 *
 * ENTRADA          SAÍDA
 * bcbdbuf          abacate
 * @ fcsb            zebra
 * $fcsb            Zebra
 *
 * DICAS:
 * ao invés incrementar, vamos precisar decrementar...
 */

// Entrada

var textoCripto = 'BCDEF'
var texto = ''

for (let i = 0; i <textoCripto.length; i++){
    let codigo = textoCripto.charCodeAt(i)
    if (textoCripto[i] === "@"){
        codigo = 122;
    }else if (textoCripto[i] === "$"){
        codigo = 90;
    }else{
        codigo -= 1;
        
    }
    texto += String.fromCharCode(codigo);
}

console.log(texto)