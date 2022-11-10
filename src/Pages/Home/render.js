import { delDeleteProfile, getReadProfile, generatePokemonPromises, consomePokeAPI } from "./requests.js"

export const renderProfile = async () => {
    const readProfile = await getReadProfile()
    
    const sectionProfile = document.querySelector('.profile')
        sectionProfile.id = readProfile.id

    sectionProfile.insertAdjacentHTML('beforeend',
    `
        <div class="profile-container">
            <div class="img-profile">
                <img src="${readProfile.avatar_url}" alt="">
            </div>
            <div class="data-profile">
                <h2>Dados pessoais</h2>
                <div class="read-profile">
                    <p><strong>Nome:</strong> ${readProfile.name}</p>
                    <p><strong>E-mail:</strong> ${readProfile.email}</p>
                </div>
            </div>
            <div class="div-btn">
                <button class="btn-default" id="btn-updateInfo">Atualizar informações</button>
                <button class="btn-delete" id="btn-deleteProfile">Deletar Conta</button>
            </div>
        </div>
    `)
}

// ================== CARD POKEMON ===================


export const renderCardPokemonHTML = async (pokemon) => {
    const ul = document.querySelector('[data-js="pokemon"]')
    const elementTypes = pokemon.types.map(typeInfo => typeInfo.type.name)

    ul.insertAdjacentHTML('beforeend', 
        `
        <li class="pokemon-card ${elementTypes[0]}" id="pokemon_details">
            <div class="img-container">
                <img id="update_img" class="img-card" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="${pokemon.name}" srcset="">
            </div>
            <div class="detail-container">
                <div class="title-container">
                    <h3 class="name text-center" id="update_name">${pokemon.name}</h3>
                    <hr class="seperator">
                <div class="stats text-center">
                    <span class="first cp-text col-md-6" id="update_hp">HP ${Math.floor((Math.random() * pokemon.stats[0].base_stat) + 1)}/${pokemon.stats[0].base_stat}</span>
                    <span class="cp-text col-md-6" id="update_cp">XP ${pokemon.base_experience}</span>
                </div>
            </div>
            <div class="attributes-container">
                <div class="col attributes-content" style="min-width: 42%;">
                    <p class="cp-text" id="update_type">${elementTypes.join(' | ')}</p>
                    <small class="text-muted">Type</small>
                </div>
                <div class="col attributes-content">
                    <p class="cp-text" id="update_weight">${pokemon.weight}kg</p>
                    <small class="text-muted">Weight</small>
                </div>
                <div class="col attributes-content">
                    <p class="cp-text no-border" id="update_height">0.${pokemon.height}m</p>
                    <small class="text-muted">Height</small>
                </div>
            </div>
            <div class="player-data">
                <div class="col data-container">
                    <p class="stardust" id="update_stardust">${Math.floor((Math.random() * 10000) + 1)}</p>
                    <p class="muted-text">Stardust</p>
                </div>
                <div class="col data-container">
                    <p class="stardust" id="update_candy">${Math.floor((Math.random() * 200) + 1)}</p>
                    <p class="muted-text" id="update_candy_title">${pokemon.name} Candy</p>
                </div>
            </div>
        </div>
    </li> 
    
    `
    )
}

export const renderizaPokemons = async (url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`) => {
    const ulTag = document.querySelector('ul')

    const listaDePokemons = await consomePokeAPI(url)

        ulTag.removeAttribute('id')
        ulTag.setAttribute('id', `${listaDePokemons.next}`)

    listaDePokemons.results.map(pokemon => {
        const numeroNaPokedex = pokemon.url.slice(34, -1)

        generatePokemonPromises(numeroNaPokedex)

    })
}
function filterSearch() {
    const input = document.getElementById("pkm_search")
    const button = document.getElementById("pkm_search_button")

    button.addEventListener("click", ()=>{
        let results = []
        for (let index = 0; index < renderizaPokemons.length; index++) {
            let name = renderizaPokemons[index].name;
            if((name.toLowerCase()).includes(input.value.toLowerCase())){
                results.push(renderizaPokemons[index])
            }
            
        }
        console.log(results)
        renderCardPokemonHTML(results)
    })
}
filterSearch()
window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight + 1 > document.body.scrollHeight) {
        const ulTag = document.querySelector('ul')

        renderizaPokemons(ulTag.id)
    }
})