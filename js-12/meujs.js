/**
 * 
 * arrays no JS
 */

const fruits = ["Apple", "Banana"];

console.log(fruits.length); // ver o tamanho da lista

const fruits3 = "Apple, Banana".split(", ");
console.log(fruits3.length); //O array 'fruits3' foi criado usando o método String.prototype.split()

const fruits4 = ["Apple", "Banana"]; // isso une os dois elementos de um arry para um string, nesse caso usou a virgula para separar
const fruitsString = fruits.join(", ");
console.log(fruitsString);

const frutas = ["banana", "maca"];
console.log(0)

const number = [1, 2, 3, 4, 5]
const resultado = number.includes(2)
const resultado2 = fruits.includes(10); // false

console.log(resultado)
console.log(resultado2)
console.log(number.indexOf(2))

const n1 = [9,8,7,6,5,4,3]
console.log(n1.push(1))
const newNumero = n1
console.log(n1)

const n2 = [9,8,7,6,5,4,3]
console.log(n1.pop())
const newNumero2 = n2
console.log(n2)


const n3 = [9,8,7,6,5,4,3]
const start = -3
console.log(n1.splice(start))

const n4 = [9,8,7,6,5,4,3]
const removeItem = n4.shift();
console.log(n4)
console.log(removeItem)

const crescenteNew = [9,8,7,6,5,4,3]
crescenteNew.sort()

console.log(crescenteNew)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros.filter(num => num % 2 === 0);
const impares = numeros.filter(num => num % 2 !== 0);

console.log("Pares:", pares);     // [2, 4, 6, 8, 10]
console.log("Ímpares:", impares); // [1, 3, 5, 7, 9]