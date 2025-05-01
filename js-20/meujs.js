/**
 * Objetos são basicamente variáveis com muitos valores dentro. Envolvido por Chaves
 * 
 * Os válores dentro de um objeto são chamados de propriedades
 * 
 * Objetos também podem ter métodos. Um Método é uma função clocadas dentro de uma propriedade
 * 
 * 2 formar de fazer um objetos
 */

// 1 forma

let obj = new Object()
obj.nome = 'Jose'
obj.idade = 42

console.log(obj)
console.log(typeof(obj))

// 2 forma
let obj2 ={
  nome: 'Jose',
  idade: 42
}

obj2['skills'] = ['html', 'css', 'js']

console.log(obj2)
console.log(typeof(obj2))