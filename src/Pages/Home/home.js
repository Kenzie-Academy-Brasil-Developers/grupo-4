import { btnLogout } from "./onclick.js";
import { renderProfile,renderizaPokemons} from "./render.js";

renderProfile()
renderizaPokemons(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`)


document.querySelector('#btn-logout').addEventListener('click', btnLogout)

