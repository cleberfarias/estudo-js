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
  ],
};
estudante.enderecos.push({
  Rua: "Lucia Martins ",
  Nnumero: 1400,
});

console.log(estudante.enderecos);
console.log(estudante.enderecos[1]);
