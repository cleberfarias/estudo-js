/**
 * Nosso amigo Erick trabalha em uma jornada de seis por dois, ou seja,
 * ele trabalha 6 dias e folga 2 dias.
 * Problema: Ele nunca sabe se um dia específico no futuro ele vai estar
 * trabalhando ou de folga. Difícil fazer planos.
 * Exemplo, como saber no dia 12 de Outubro ele vai estar trabalhando ou de folga?
 * Como fazer um programa que liste os próximos 3 meses com dias de trabalho/folga?
 *
 */

// Entrada
// Pŕoxima volta

// Saída com base na próxima folga, calcular dia de trabalho/folga

let qualDia = 7
let qualMes = 11

var dias = [
    1,  2,  3,  4,  5,  6,  7,  8,  9, 10,
   11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
   21, 22, 23, 24, 25, 26, 27, 28, 29, 30
  ];



var indice = 0

while (indice < dias.length){
    let diasDeTrabalho =[]

    for( let count = 0; count < 6 && indice < dias.length; count++){
        diasDeTrabalho.push(dias[indice]);
        indice++
    }
    if (diasDeTrabalho.includes(qualDia)) {
        console.log(`Dia ${qualDia} do mês ${qualMes} é Dia de trabalho`);
    }

    indice += 2;
    

    if (qualDia > diasDeTrabalho[diasDeTrabalho.length - 1] && qualDia <= dias[indice]) {
        console.log(`Dia ${qualDia} do mês ${qualMes} é Dia de folga`);
    }

    
}
