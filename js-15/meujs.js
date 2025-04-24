/**
 * Lógica booleana
 * (5 > 6) .......... == false
 * ('R' == 'r') ..... == false
 * [] ............... == true
 * 0 ................ == false
 * '' ............... == false
 * 'texto' .......... == true
 * not false ........ == true
 * no true .......... == false
 */

let idade = 75

if (idade == 18) {
    console.log("Tem 18 anos")
} else if (idade >= 60 && idade <=69) {
    console.log("Tem 60 anos ou mais")
} else if (idade >= 70) {
    console.log("Tem 70 anos ou mais")
} else {
    console.log("Não tem 18 anos")
}

console.log("fim")
