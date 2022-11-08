import { pokemon } from "./src/Scripts/api.js";
import {renderAvatar} from "./src/Scripts/render_avatar.js"

const ul = document.getElementById("poke-list");
const img = document.createElement("img");
img.classList.add("pokeball");
img.src = "https://th.bing.com/th/id/R.fd721f81cf12ebf7b3234c2c665b584c?rik=VX6HpLVptUIOMQ&riu=http%3a%2f%2fwww.freepnglogos.com%2fuploads%2fpokemon-symbol-logo-png-31.png&ehk=aSt1644QEFHVKT7thXmBsOPsr2lNpCODH4hF6OqUS5M%3d&risl=&pid=ImgRaw&r=0";
ul.appendChild(img)

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  setInterval(() => {
  const randomId = getRandomInt(1, 905);
  renderAvatar(randomId)}, 3333) 

/*const para pegar pokemon aleatório */
/* const randomPokemon = await pokemon(getRandomInt(1,905)); */

/* const para pegar pokemon específico */
/* const getPokemon = await pokemon(); */

/* const para pegar imagem da api pixelada do pokemon*/
/* const pokemonAvatar = randomPokemon.sprites.front_default; */

/* const para acessar os elementais, armazenando em array */
/* const pokemonElement = randomPokemon.types.map((slot) => slot.type.name); */
