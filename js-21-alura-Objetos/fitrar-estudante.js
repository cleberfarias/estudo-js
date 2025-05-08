const estudantes = require('./estudantes.json')

function filtrarPorPropriedade(lista, propriedade){
    return lista.filter(function(estudante){
        return !estudante.endereco.hasOwnProperty(propriedade);
    });
}

const listaEnderecosIncompletos = filtrarPorPropriedade(estudantes, 'cep');
console.log(listaEnderecosIncompletos);


//hasOwnProperty  é um método do objeto JavaScript, que serve para verificar se um objeto possui uma propriedade definida no próprio objeto, ao invés de uma propriedade herdada.