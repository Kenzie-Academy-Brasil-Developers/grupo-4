import { requestUserRegister, requestUserLogin, pokemon } from "./src/Scripts/api.js";
import {renderAvatar} from "./src/Scripts/render_avatar.js"
import { registerAndLoginModal } from "./src/Pages/Modal/modal.js"

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

function registerUser () {

  const inputUsername = document.querySelector ("#input-user-name")
  const inputUserEmail = document.querySelector ("#input-user-email")
  const inputUserPassword = document.querySelector ("#input-user-password")
  const inputUserAvatar = document.querySelector ("#input-user-avatar")
  const buttonRegister = document.querySelector ("#button-submit")

  buttonRegister.addEventListener ("click", async (even) => {
    even.preventDefault ()
    buttonRegister.classList.add ("button-spinner", "button-text-hidden")
    const newUsersData = {
      name: inputUsername.value,
      email: inputUserEmail.value,
      password: inputUserPassword.value,
      avatar_url: inputUserAvatar.value,
    }
    console.log (newUsersData)
    await requestUserRegister(newUsersData)
  })  
}

function logUser () {

  const inputUserEmail = document.querySelector ("#input-login-email")
  const inputUserPassword = document.querySelector ("#input-login-password")
  const buttonLogin = document.querySelector ("#button-login")
  buttonLogin.addEventListener ("click", async (even) => {
    even.preventDefault ()
    const userData = {
      email: inputUserEmail.value,
      password: inputUserPassword.value,
    }
    await requestUserLogin (userData)
  })
}

/*const para pegar pokemon aleatório */
/* const randomPokemon = await pokemon(getRandomInt(1,905)); */

/* const para pegar pokemon específico */
/* const getPokemon = await pokemon(); */

/* const para pegar imagem da api pixelada do pokemon*/
/* const pokemonAvatar = randomPokemon.sprites.front_default; */

/* const para acessar os elementais, armazenando em array */
/* const pokemonElement = randomPokemon.types.map((slot) => slot.type.name); */