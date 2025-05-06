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

//const chaveObjeto = Object.entries(estudante)
//console.log(chaveObjeto);


const chaveObjetoKeys = Object.keys(estudante)
console.log(chaveObjetoKeys);

const chaveObjetoValue = Object.values(estudante)
console.log(chaveObjetoValue);

if (!chaveObjetoKeys.includes('enderecos')){
    console.error('É necessário ter um bairro cadastrado')
}