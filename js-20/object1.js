
let obj ={
  nome: 'Jose',
  anoNascimento: 1984,
  idade: function(){
    return new Date().getFullYear() - this.anoNascimento
  }
}


console.log(obj)
console.log(typeof(obj))

console.log(obj.idade());