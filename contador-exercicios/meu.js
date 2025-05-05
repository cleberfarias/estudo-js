
function contador (){
    let elValor = document.querySelector("#text")
    let valor = parseInt(elValor.value)
    valor += 1
    elValor.value =valor

}

const btn = document.querySelector("#btn")
btn.addEventListener('click', contador);