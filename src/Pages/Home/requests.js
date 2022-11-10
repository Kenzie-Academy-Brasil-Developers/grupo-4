import { renderCardPokemonHTML } from "./render.js"

const baseUrl = 'https://m2-api-adot-pet.herokuapp.com'
const pokemonDataUrl = 'https://pokeapi.co/api/v2/pokemon'

export const getReadProfile = async (token) => {
    const readProfile = await fetch(`${baseUrl}/users/profile`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => {
            return res.json()
        })
        .then((res) =>res)
    return readProfile
}

export const patchUpdateProfile = async (data) => {
    console.log(data);
    const updateProfile = await fetch(`${baseUrl}/users/profile`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                alert(res.json().then(response = response.message))
            }
        })
        .then((res) => res)
    return updateProfile
}

export const delDeleteProfile = async () => {
    let tokenLocalStorage = localStorage.getItem ("@Poké:USER")
    let token = JSON.parse(tokenLocalStorage)

    const deleteProfile = await fetch(`${baseUrl}/users/profile`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then((res) => res.json())
        .then((res) => res)
    return deleteProfile
}

//  ======= CARD POKEMON =====


export const generatePokemonPromises = async (id) => {
    await fetch(`${pokemonDataUrl}/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(res => {
        if (res.ok) {
            return res.json()
        } else {
            // alert(res.json().then(response => response.message))
            loading.classList.add('hidden')
        }
    })
    .then((res) => renderCardPokemonHTML(res))
}

export const consomePokeAPI= async (url) => {
    try {
        const response = await fetch(url)

        const pokemonsDaAPI = response.json()
        return pokemonsDaAPI
    } catch(error) {
        console.log(error)
    }
}
