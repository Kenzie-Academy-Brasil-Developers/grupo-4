const ul = document.getElementById("poke-list");

export function renderAvatar(id) {
    ul.innerHTML="";
  const li = document.createElement("li");
  li.classList.add("avatar-box");
  const img = document.createElement("img");
  img.classList.add("avatar");

  img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  li.appendChild(img);
  ul.appendChild(li);
}
