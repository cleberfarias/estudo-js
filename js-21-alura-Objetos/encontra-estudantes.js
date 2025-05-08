const estudantes = require('./estudantes.json');

function buscaInformacao (lista, chave, valor ){
    return lista.find(function(estudante){
        return estudante[chave].includes(valor);
    });
}

// const estudanteEncontrado = buscaInformacao (estudantes, 'nome','Izaak')
// console.log(estudanteEncontrado);

const telefoneEstudante = buscaInformacao (estudantes, 'telefone','9916828153')
console.log(telefoneEstudante);