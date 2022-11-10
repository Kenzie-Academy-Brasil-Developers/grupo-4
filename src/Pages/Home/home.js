import { btnLogout } from "./onclick.js";
import { renderProfile,renderizaPokemons} from "./render.js";



const isTheUserLoggedIn = () => {
    let tokenLocalStorage = localStorage.getItem ("@Poké:USER")
    let loggedUsersToken = ''
    if (tokenLocalStorage) {
        let token = JSON.parse(tokenLocalStorage)
        loggedUsersToken = token

        renderProfile(token)
        renderizaPokemons(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`)

        document.querySelector('#btn-logout').addEventListener('click', btnLogout)
    } else {
        window.location.replace ("../../../index.html")
    }
    return loggedUsersToken
}

isTheUserLoggedIn()