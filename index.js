import {renderAvatar} from "./src/Scripts/render_avatar.js"
import { registerAndLoginModal, registerUser, logUser } from "./src/Pages/Modal/modal.js"

const ul = document.getElementById("poke-list");
const img = document.createElement("img");
const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const modalRegisterAndLogin = document.querySelector (".modal-background")

img.classList.add("pokeball");
img.src = "./src/Img/pokeball.png";
ul.appendChild(img)
 
/* Funções para gerar imagens randômicas */

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

setInterval(() => {
  const randomId = getRandomInt(1, 905);
  renderAvatar(randomId)
}, 3333) 


registerBtn.addEventListener("click", () => {
  registerAndLoginModal ("Register Modal")
  registerUser ()
});

loginBtn.addEventListener("click", () => {
  registerAndLoginModal ("Login Modal")
  logUser ()
});

/*const para pegar pokemon aleatório */
/* const randomPokemon = await pokemon(getRandomInt(1,905)); */

/* const para pegar pokemon específico */
/* const getPokemon = await pokemon(); */

/* const para pegar imagem da api pixelada do pokemon*/
/* const pokemonAvatar = randomPokemon.sprites.front_default; */

/* const para acessar os elementais, armazenando em array */
/* const pokemonElement = randomPokemon.types.map((slot) => slot.type.name); */