/**
 * O Objeto é sempre composto de conjunto de chave e valor 
 */



const  estudante ={
    nome: 'José Silva',
    idade: 32,
    cpf: '11111111111',
    turma: 'JavaScript'
  }
  console.log(estudante.nome);
  console.log(`O nome do estudante é ${estudante.nome}`);
  console.log(`Os três primeiros digitos do seu cpf é: ${estudante.cpf.substring(0, 3)}`);

