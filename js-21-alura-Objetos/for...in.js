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

for (let chave in estudante){
    const texto = `A chave ${chave} tem o valor ${estudante[chave]}`
    console.log(texto);
}

// a chave endereço não é mostrada ela aparece Object Object, quando você tenta exibir um objeto como string diretamente. uando você usa um objeto com + ou em template literals (`${objeto}`), o JavaScript tenta convertê-lo em string usando o método padrão .toString(), e para objetos normais, isso resulta em [object Object]