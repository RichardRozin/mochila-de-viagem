const form = document.querySelector('#novoItem')
const lista = document.querySelector('.lista')
const itens = JSON.parse(localStorage.getItem('itens')) || []

itens.forEach(function(elemento){
    criaElemento(elemento)
})

form.addEventListener('submit', function(evento){
    evento.preventDefault()
    const nome = evento.target.elements.nome
    const quantidade = evento.target.elements.quantidade

    if (nome.value == ''){
        alert('Preencha os campos para adicionar um item!!!') 
    }

    novoItem = {
        'nome': nome.value,
        'quantidade': quantidade.value
    }

    itens.push(novoItem)
    console.log(itens)

    localStorage.setItem('itens', JSON.stringify(itens))

    criaElemento(novoItem)

    nome.value = ''
    quantidade.value = ''
})


function criaElemento(elemento){
    if (elemento.nome != ''){
    const novoLi = document.createElement('li')
    novoLi.classList.add('item')
    const strong = document.createElement('strong')
    strong.innerHTML = elemento.quantidade
    novoLi.appendChild(strong)
    novoLi.innerHTML += elemento.nome
    novoLi.appendChild(apagaItem())
    lista.appendChild(novoLi)
    }
}

function apagaItem(nome){
    const botao = document.createElement('button')
    botao.innerHTML = 'X'

    botao.addEventListener('click', function(evento){
        evento.target.parentNode.remove()
    })

    return botao
}

const botaoExcluir = document.querySelector('#excluitudo')
botaoExcluir.addEventListener('click', function(){
    localStorage.clear()
    window.location.reload()
}
)




