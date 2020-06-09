function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then( res => res.json() )
        .then( states => {

            for( state of states ) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }

        } )
}

populateUFs()

function getCities (event) {
    const citySelect =  document.querySelector("select[name=city]")
    const stateInput =  document.querySelector("input[name=state]")
    
    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text
    
    const ufValue = event.target.value

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML == "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
        .then ( res => res.json() )
        .then( cities => {
            for ( city of cities ) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }

        citySelect.disabled = false

        })

}



document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)


// Itens de coleta

const itemsToCollect = document.querySelectorAll(".items-grid li")

for(const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const colellectedItems = document.querySelector("input[name=items")

let selectedItem = []

function handleSelectedItem (event) {
    // adicionar ou remover com JavaScript

    const itemLi = event.target 
    itemLi.classList.toggle("selected")
    const itemId = itemLi.dataset.id

    // verificar se existem items selecionaos, se sim pegar os items selecionados

    const alreadySelected = selectedItem.findIndex( item => item == itemId ) // sera true ou false

    // se ja estiver selecionado, tirar da selecao

    if (alreadySelected != -1){
        const filteredItems = selectedItem.filter( item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })

        selectedItem = filteredItems
    } else {
        // se nao estiver selecionado, adicionar a selecao
        // adicionar a selecao
        selectedItem.push(itemId)

    }


    // atualizar o campo escondido com os itens selecionados

    colellectedItems.value = selectedItem
}