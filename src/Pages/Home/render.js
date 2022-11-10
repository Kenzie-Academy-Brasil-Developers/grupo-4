import { btnProfile, btnLogout } from "./onclick.js"
import { getReadProfile, consomePokeAPI, generatePokemonPromises, delDeleteProfile } from "./requests.js"


export const renderProfile = async (token) => {
    const readProfile = await getReadProfile(token)
    
    const sectionProfile = document.querySelector('.profile')
    sectionProfile.id = readProfile.id

    const imgProfile = document.querySelector('#btn-Profile')
        imgProfile.src = readProfile.avatar_url
        imgProfile.addEventListener('click', btnProfile)

    const nameProfile = document.querySelector('.name-profile')
        nameProfile.innerText = readProfile.name

    const emailProfile = document.querySelector('.email-profile')
        emailProfile.innerText = readProfile.email

    const btnDeleteProfile = document.querySelector('#btn-deleteProfile')
        btnDeleteProfile.addEventListener('click', () => {
            delDeleteProfile()
            btnLogout()
        })
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
                    <h3 id="update_name">${pokemon.name}</h3>
                    <hr class="seperator">
                <div class="stats">
                    <span id="update_hp">HP ${Math.floor((Math.random() * pokemon.stats[0].base_stat) + 1)}/${pokemon.stats[0].base_stat}</span>
                    <span id="update_cp">XP ${pokemon.base_experience}</span>
                </div>
            </div>
            <div class="attributes-container">
                <div style="min-width: 42%;">
                    <p id="update_type">${elementTypes.join(' | ')}</p>
                    <small>Type</small>
                </div>
                <div>
                    <p class=" id="update_weight">${pokemon.weight}kg</p>
                    <small>Weight</small>
                </div>
                <div>
                    <p id="update_height">0.${pokemon.height}m</p>
                    <small>Height</small>
                </div>
            </div>
            <div class="player-data">
                <div>
                    <p id="update_stardust">${Math.floor((Math.random() * 10000) + 1)}</p>
                    <p>Stardust</p>
                </div>
                <div>
                    <p id="update_candy">${Math.floor((Math.random() * 200) + 1)}</p>
                    <p id="update_candy_title">${pokemon.name} Candy</p>
                </div>
            </div>
        </div>
    </li> 
    
    `
    )
}


export const renderizaPokemons = async (url) => {
    const ulTag = document.querySelector('ul')

    const listaDePokemons = await consomePokeAPI(url)

        ulTag.removeAttribute('id')
        ulTag.setAttribute('id', `${listaDePokemons.next}`)

        
        const arrayID = []
        listaDePokemons.results.map(pokemon => {
            const numeroNaPokedex = pokemon.url.slice(34, -1)

        arrayID.push({id:numeroNaPokedex})
        
    })
    pokemonPromises(arrayID)
}

const scroll = () => {
    window.addEventListener('scroll', () => {
        if (window.scrollY + window.innerHeight + 1 > document.body.scrollHeight) {
            const ulTag = document.querySelector('ul')
    
            renderizaPokemons(ulTag.id)
        }
    })
}

export const pokemonPromises = async (arrayID) => {
    arrayID.map(pokemon => generatePokemonPromises(pokemon.id))
    scroll()
} 

