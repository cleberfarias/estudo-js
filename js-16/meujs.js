/**
 * TABELA VERDADE ( E && )
 * ------------------------
 * 0 · 0 := 0
 * 0 · 1 := 0
 * 1 · 0 := 0
 * 1 · 1 := 1 ...(***)
 *
 * TABELA VERDADE ( OU || )
 * -------------------------
 * 0 · 0 := 0
 * 0 · 1 := 1
 * 1 · 0 := 1
 * 1 · 1 := 1
 */

let idade = 18
let estudante = true

if (idade < 32 && estudante) {
    console.log('menor q 32 e estudante')
} else {
    console.log('sem desconto!')
}

let idade2 = 18

let estudante2 = true

if (idade < 32 || estudante) {
    console.log('menor q 32 ou é estudante')
} else {
    console.log('sem desconto!')
}
