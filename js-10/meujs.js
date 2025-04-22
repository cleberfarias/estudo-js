/**
 * JS - Palavras reservadas
 */

const numero1 = document.querySelector("#numero1")
const expressao = document.querySelector("#tipoExpressao")
const numero2 = document.querySelector("#numero2")
let resultado;

function calcular(){
    const n1 = parseFloat(numero1.value);
    const n2 = parseFloat(numero2.value);
    const tipo = parseInt(expressao.value);

    let operacoes =[
        ()=> n1 + n2,
        ()=> n1 - n2,
        ()=> n1 * n2,
        ()=> n1 / n2,
    ];
    const simbolos = ['+', '-', '*', '/'];

    
        if (tipo >= 1 && tipo <= 4) {
            resultado = operacoes[tipo - 1]();
            const simbolo = simbolos[tipo - 1];
            console.log(`${n1} ${simbolo} ${n2} = ${resultado}`);
        } else {
            resultado = "Tipo inválido";
            console.log(`${n1} ? ${n2} = ${resultado}`);
        }
    
    document.querySelector("#resultado").value =resultado;
}

console.log(Math.floor (14/8))