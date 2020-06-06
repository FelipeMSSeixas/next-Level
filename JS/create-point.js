
function populateUFs (){
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( (res) => {return res.json()})
    .then( (states) => {

        for(const state of states) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`

        }
        
    })
}

populateUFs()

function getCity(event) {
    const citySelect = document.querySelector("select[name=city]")
    const valueUf = event.target.value
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${valueUf}/municipios`
    
    citySelect.innerHTML = "<option value> Selecione a Cidade </option>" /*limpa a caixa de seleção de cidades antes de adicionar e escreve "Selecione a Cidade, caso fosse só limpatr => citySelect.innerHTML = ""*/
    citySelect.disabled = true /* desabilita a caixa de seleção da cidade*/ 

    fetch(url)
    .then((res) => {return res.json()})
    .then( (citys) => {

        for( const city of citys) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`/*adiciona as cidades na caixa de seleção*/

        }
        citySelect.disabled = false
    })

}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCity)



// *********************Itens de coleta da caixa de cadastro***************************************//
// pegar todos os elementos da li
const itemToCollect = document.querySelectorAll(".items-grid li")
for(const item of itemToCollect){
    item.addEventListener("click", handleSelectedItem)
}


document.querySelector("input[name= item]")

let selectedItems = []    /*varial de coleçao de dados "um array"*/

function handleSelectedItem(event){
    const itemsLi = event.target /*mostra os itens da li*/
    /*adicionar ou remover uma classe no Js*/
    itemsLi.classList.toggle("selected") /* adicionar e/ou retirar uma classe= selected na lista*/
    /*itemsLi.classList.add("selected") para adicionar poderia ser assim*/
    /*itemsLi.classList.removed("selected") para remover poderia ser assim*/
   

    const itemId = itemsLi.dataset.id /* mostra os "id" das li.*/
    
    // Verificar se tem itens saelecionados  pt-1//
    //se sim, pegar os itens selecionados//
    const alreadySelected = selectedItems.findIndex(item => { //index é a posição do elemento dentro da coleção let selectedItems = []//
        const itemFound = item == itemId //isso sera true ou false//
        return itemFound
        
    })
    console.log(alreadySelected)
    //se o item ja estiver selecionado e for clicado denovo: ... pt-2//
    if(alreadySelected >= 0){  //se na comparação anterior feita indicar que no index existe um elemento em alguma posição então sera true e rodara o que o if pede,(o 0 é pq a primeira posição do index é 0, então se for maior igual a 0 quer dizer que existe um item na minha coleção let selectedItems = [])
       //... tirar da seleçao  pt-3//
       const filteredItems = selectedItems.filter( item => {
           const itemIsDifferent = item != itemId
           return itemIsDifferent
       })
       selectedItems = filteredItems
    } else{ //se não tiver selecionado, selecionar pt-4(quando for clicado vai mandar se id para a coleção de dados)//
        selectedItems.push(itemId) //o push colocada elemento dentro do arrey(coleção de dados)//

    }

    //atualizar o input escondido com os itens selecionados pt-5//
    //document.querySelector("input[name= item]" pt-5) ele sobe pq toda hora vai ficar aceesando html, então na é legal e ficar por ultimo. ele subiu para a linha 53//
}
