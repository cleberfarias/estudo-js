const estudantes = require('./estudantes.json')

function ordernaEstudantes (lista, propriedade){
    return lista.sort(function(a, b){
        if (a[propriedade]<b[propriedade])
            return -1;
        if (a[propriedade]>a[propriedade])
            return 1;
    }); 
}

const listaOrdenad =ordernaEstudantes(estudantes, 'nome');
console.log(listaOrdenad);


// método .sort() pode ser utilizado de duas formas. A forma mais simples, onde não fazemos condicionais dentro do callback, 
// pode ser usada em alguns casos, mas não é possível utilizá-la para entrar na propriedade de um objeto e fazer ordenação por
// essa propriedade. Ela também não funciona para valores numéricos, apenas para textos. Se tivermos uma lista de strings para 
// ordenar, podemos utilizar a forma mais simples.