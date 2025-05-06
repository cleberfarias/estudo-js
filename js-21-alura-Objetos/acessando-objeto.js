/**
 * Acessando informações do objeto com a anotação [] 
 * sempre tem que estar entre aspas pois se não o javascript entende que pode ser alguma variavel, e retornar com indefinido, embora continua funcionando sem da erro
 */



const  estudante ={
    nome: 'José Silva',
    idade: 32,
    cpf: '11111111111',
    turma: 'JavaScript'
  }
function exibeNomeEstutante(objetoEstudante, infoEstudante){
    return objetoEstudante[infoEstudante]
}
console.log(estudante['nome']);
console.log(estudante['cpf']);
