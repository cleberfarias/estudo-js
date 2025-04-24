/**
 * for
 * for in
 * for of
 * forEch
 */

let listaUm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
    11, 12, 13, 14, 15, 16, 17, 18, 
    19, 20, 21, 22]

let listaDois = [
    'erro', 'eleva', 'duque', 'damas', 'dados', 'creme', 
    'cofre', 'acode', 'acima', 'achou', 'ache', 'achem']

// for tradicional
//for (var indice =0; indice < listaUm.length; indice++){ 
//    console.log('indice=', listaUm[indice])
//}

// for in
//for (var indice in listaUm){
//    console.log('indice', listaUm[indice]);
//}

// for off
//for (var elemento of listaDois){
//      console.log('elemento', elemento);
//}
//forEch
listaDois.forEach(function(elemento){
    console.log(elemento)
})