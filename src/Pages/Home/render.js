import { delDeleteProfile, getReadProfile, generatePokemonPromises } from "./requests.js"

export const renderProfile = async () => {
    const readProfile = await getReadProfile()
    
    const sectionProfile = document.querySelector('.profile')
        sectionProfile.id = readProfile.id

    const divContainer = document.createElement('div')
        divContainer.classList.add('profile--container')

    const divImgProfile = document.createElement('div')
        divImgProfile.classList.add('profile__div--imgProfile')
    const imgProfile = document.createElement('img')
        imgProfile.src = readProfile.avatar_url

    divImgProfile.append(imgProfile)

    const divDataProfile = document.createElement('div')
        divDataProfile.classList.add('profile__div--dataProfile')
    const title = document.createElement('h2')
        title.innerText = 'Dados pessoais'

    const divReadProfile = document.createElement('div')
        divReadProfile.classList.add('profile__div--readProfile')
    const name = document.createElement('p')
        name.innerText = readProfile.name
    const email = document.createElement('p')
        email.innerText = readProfile.email

    divReadProfile.append(name, email)
    divDataProfile.append(title, divReadProfile)

    const divBtn = document.createElement('div')
        divBtn.classList.add('profile__div--btn')
    const btnUpDataInfo = document.createElement('button')
        btnUpDataInfo.classList.add('profile--btnUpdateInfo')
        btnUpDataInfo.innerText = 'Atualizar informações'
    const btnDeleteProfile = document.createElement('button')
        btnDeleteProfile.classList.add('profile--btnDeleteProfile')
        btnDeleteProfile.innerText = 'Deletar Conta'
        btnDeleteProfile.addEventListener('click', () => {
            delDeleteProfile()
        })

    divBtn.append(btnUpDataInfo, btnDeleteProfile)

    divContainer.append(divImgProfile, divDataProfile, divBtn)
    sectionProfile.append(divContainer)
}

// ================== CARD POKEMON ===================


export const renderCardPokemonHTML = pokemons => {
    return pokemons.reduce((acc, pokemon) => {
        const types = pokemon.types.map(typeInfo => typeInfo.type.name)
        
            acc +=
                `
                <li class="col-md-5 col-sm-5 pokemon-card ${types[0]}" id="pokemon_details">
                    <div class="img-container">
                        <img id="update_img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="${pokemon.name}" srcset="">
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
                            <p class="cp-text" id="update_type">${types.join(' | ')}</p>
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
        return acc
    }, '')
}

export const insertPokemonsIntoPage = pokemons => {
    const ul = document.querySelector('[data-js="pokemon"]')
    ul.innerHTML = pokemons
}

export const renderArrayPokemon = () => {
    const pokemonPromises = generatePokemonPromises()
    Promise.all(pokemonPromises)
        .then(renderCardPokemonHTML)
        .then(insertPokemonsIntoPage)
}