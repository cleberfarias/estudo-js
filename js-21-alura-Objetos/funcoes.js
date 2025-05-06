const  estudante ={
    nome: 'José Silva',
    idade: 32,
    cpf: '11111111111',
    turma: 'JavaScript',
    bolsista: true,
    telefones:['554899999999','554888888888'],
    media: 5,
    foiAprovado: function(mediaBase){
        
        return this.media >= mediaBase ? "Aprovado" : 'Reprovado'
    }
      
  }


console.log(`O Aluno ${estudante.nome}, tem a nota ${estudante.media} e esta ${estudante.foiAprovado(6)}!`);