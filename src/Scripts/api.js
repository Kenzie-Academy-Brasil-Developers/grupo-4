import { toast } from "../Pages/Toast/toast.js"

const baseUrl = "http://localhost:6278/";

async function requestUserRegister (body) {

    try {
  
    const register =  await fetch (`${baseUrl}auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify (body),
    })
  
    if (register.ok) {
        const response = await register.json();
        console.log ("Sucesso!")
        console.log (response) 
  
        setTimeout (() => {
          toast("success", "Sucesso!", "Seja bem vindo! O seu cadastro foi realizado com sucesso. ")
        }, 100)
  
        setTimeout (() => {
          window.location.replace ("../Login/login.html")
        }, 4000)
  
        return response
  
      } else {
        console.log ("Erro!")
        console.log (register) 
        setTimeout (() => {
          toast("error", "Erro!", "Favor revise todas as informações passadas e tente outra vez.")
        }, 100)
        setTimeout (() => {
          const toast = document.querySelector (".message").remove()
        }, 4000)
      }
  
    } catch (err) {
      console.log (err)
    }
}  

export async function pokemon(id) {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${id}`, {
      method: "GET",
      headers: {
          "Content-type":"application/json; charset=utf-8"
      }
  })
  .then((res) => res.json())
  .then((res) => res)
  .catch((error) => console.log(error));
  
  return data;
}