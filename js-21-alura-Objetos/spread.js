const estudante = {
    nome: "José Silva",
    idade: 32,
    cpf: "11111111111",
    turma: "JavaScript",
    bolsista: true,
    telefones: ["554899999999", "554888888888"],
    enderecos: [
      {
        Cidade: "Campo Grande",
        Estado: "MS",
        CEP: "79097170",
        Rua: "Lucia Martins Coelho",
        Nnumero: 1477,
        Complemento: "Casa",
      },
      {
        Cidade: "Santa Catarina",
        Estado: "SC",
        CEP: "88590000",
        Rua: "Eduardo Salmoria",
        Nnumero: 156,
        Complemento: "Casa",
      },
    ],
  };


function exibeTelefones (telefone1, telefone2){
    console.log(`Ligar para ${telefone1}`);
    console.log(`Ligar para ${telefone2}`);
}

exibeTelefones(estudante.telefones[0], estudante.telefones[1])
exibeTelefones(...estudante.telefones) //Spread Operator para extrair dados de um objeto e montar outros objetos a partir disso.

const dadosEnvio ={
    destinatario :estudante.nome,
    ...estudante.enderecos[0]
    
}

console.log(dadosEnvio);

