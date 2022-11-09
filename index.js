import { requestUserRegister, pokemon } from "./src/Scripts/api.js";
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
}, 1600) 


registerBtn.addEventListener("click", () => {
  registerAndLoginModal ("Register Modal")
  console.log ("Oi!")

  registerUser ()
});

loginBtn.addEventListener("click", () => {
  registerAndLoginModal ("Login Modal")
  console.log ("Oooooi!")
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

// const registerModal = document.querySelector ("#register-modal")
// const loginModal = document.querySelector ("#login-modal")

// function alternativeLoginButton () {
//   console.log ("Oi!")
//   if (modalRegisterAndLogin.classList.contains ("register-modal")) { 
//   // const aLink = document.querySelector ("#alt-register-button")
//   // aLink.addEventListener ("click", (even) => {
//   //   even.preventDefault ()
//   //   registerAndLoginModal ("Login Modal")
//   // })
//   }
// }

// function alternativerRegisterButton () {
//   console.log ("Oooooi!")
//   // if (modalRegisterAndLogin.id === "#register-modal") {  
//   //   const aLink = document.querySelector ("#alt-register-button")
//   //   aLink.addEventListener ("click", (even) => {
//   //   even.preventDefault ()
//   //   // registerAndLoginModal ("Register Modal")
//   //   })
//   // }
// }

// function registerUser () {

//   const inputUsername = document.querySelector ("#input-user-name")
//   const inputUserEmail = document.querySelector ("#input-user-email")
//   const inputUserPassword = document.querySelector ("#input-user-password")
//   const inputUserAvatar = document.querySelector ("#input-user-avatar")
//   const buttonRegister = document.querySelector ("#button-submit")
 
//   if (inputUsername.value !== "" && inputUserEmail.value !== "" && inputUserPassword.value !== "" && inputUserAvatar.value !== "") {
//     buttonRegister.setAttribute ("class", "purpleButton-enable")
//     // buttonRegister.removeAttribute ("disabled")
//     // buttonRegister.classList.add ("blueButton-enable")
//     // buttonRegister.classList.remove ("blueButton")
//   } else {
//     // buttonRegister.setAttribute ("disabled", "true")
//     // buttonRegister.classList.remove ("blueButton-enable")
//     // buttonRegister.classList.add ("blueButton")
// }
// }

/*const para pegar pokemon aleatório */
/* const randomPokemon = await pokemon(getRandomInt(1,905)); */

/* const para pegar pokemon específico */
/* const getPokemon = await pokemon(); */

/* const para pegar imagem da api pixelada do pokemon*/
/* const pokemonAvatar = randomPokemon.sprites.front_default; */

/* const para acessar os elementais, armazenando em array */
/* const pokemonElement = randomPokemon.types.map((slot) => slot.type.name); */