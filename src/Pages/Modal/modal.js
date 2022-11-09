const body = document.querySelector ("body")

// ABAIXO, CHAMADAPARA OS MODAIS:
// registerAndLoginModal ("Register Modal")
// registerAndLoginModal ("Login Modal")

export function registerAndLoginModal (typeOfModal) {

    const registerModal = "Register Modal"
    const loginModal = "Login Modal"

    const spanModalBackground = document.createElement ("span")
    const divModal = document.createElement ("div")
    const header = document.createElement ("header")
    const buttonCloseModal = document.createElement ("button")
    const imgCloseModal = document.createElement ("img")
    const divModalBody = document.createElement ("div")
    const h2 = document.createElement ("h2")
    const form = document.createElement ("form")
    const inputA = document.createElement ("input")
    const inputB = document.createElement ("input")
    const inputC = document.createElement ("input")
    const inputD = document.createElement ("input")
    const buttonSubmit = document.createElement ("button")
    const divLink = document.createElement ("div")
    const p = document.createElement ("p")
    const a = document.createElement ("a")
    const footerModal = document.createElement ("footer")

    spanModalBackground.setAttribute ("class", "modal-background")
    divModal.setAttribute ("class", "modal")
    buttonCloseModal.setAttribute ("class", "close-modal")
    buttonCloseModal.setAttribute ("type", "button")
    imgCloseModal.setAttribute ("src", "./src/Img/Close modal - Register and Login.svg")
    imgCloseModal.setAttribute ("alt", "Button close modal")
    divModalBody.setAttribute ("class", "modal-body")
    buttonSubmit.setAttribute ("class", "purpleButton")
    buttonSubmit.setAttribute ("type", "submit")
    divLink.setAttribute ("class", "link")
    footerModal.setAttribute ("class", "modal-footer")

    buttonCloseModal.addEventListener ("click", (even) => {
        even.preventDefault ()
        console.log ("Close modal")
        window.location.replace ("./index.html")
    })

    if (typeOfModal === "Register Modal") {

        spanModalBackground.classList.add("register-modal") 
        h2.innerText = "Cadastrar"
        form.id = "form-register"
        inputA.setAttribute ("placeholder", "Nome")
        inputA.setAttribute ("type", "text")
        inputA.setAttribute ("id", "input-user-name")
        inputA.setAttribute ("name", "name")
        inputA.setAttribute ("required", true)

        inputB.setAttribute ("placeholder", "E-mail")
        inputB.setAttribute ("type", "text")
        inputB.setAttribute ("id", "input-user-email")
        inputB.setAttribute ("name", "email")
        inputB.setAttribute ("required", true)

        inputC.setAttribute ("placeholder", "Senha")
        inputC.setAttribute ("autocomplete", true)
        inputC.setAttribute ("type", "password")
        inputC.setAttribute ("id", "input-user-password")
        inputC.setAttribute ("name", "password")
        inputC.setAttribute ("required", true)

        inputD.setAttribute ("placeholder", "Avatar (URL)")
        inputD.setAttribute ("type", "text")
        inputD.setAttribute ("id", "input-user-avatar")
        inputD.setAttribute ("name", "avatar")
        inputD.setAttribute ("required", true)

        buttonSubmit.innerText = "Cadastrar"
        buttonSubmit.setAttribute ("id", "button-submit")
        divLink.insertAdjacentHTML ("beforeend", `<p>Já tem cadastro? <a id="alt-login-button" href="">Clique aqui</a> para logar.</p>`)

        form.addEventListener ("keyup", (even) => {
            if (inputA.value !== "" && inputB.value !== "" && inputC.value !== "" && inputD.value !== "") {
                buttonSubmit.setAttribute ("class", "purpleButton-enable")
            } else {
                buttonSubmit.setAttribute ("class", "purpleButton")
            }
        })

        spanModalBackground.appendChild (divModal)
        divModal.append (header, divModalBody, footerModal)
        header.appendChild (buttonCloseModal)
        buttonCloseModal.appendChild (imgCloseModal)
        divModalBody.append (h2, form, divLink)
        form.append (inputA, inputB, inputC, inputD, buttonSubmit)
        body.appendChild (spanModalBackground)

    } else if (typeOfModal === "Login Modal") {

        spanModalBackground.classList.add ("login-modal")
        h2.innerText = "Login"
        form.id = "form-login"
        inputA.setAttribute ("placeholder", "E-mail")
        inputA.setAttribute ("type", "text")
        inputA.setAttribute ("id", "e-mail")
        inputA.setAttribute ("name", "input-email")
        inputA.setAttribute ("required", true)

        inputB.setAttribute ("placeholder", "Senha")
        inputB.setAttribute ("autocomplete", true)
        inputB.setAttribute ("type", "password")
        inputB.setAttribute ("id", "password")
        inputB.setAttribute ("name", "input-password")
        inputB.setAttribute ("required", true)

        buttonSubmit.innerText = "Entrar"
        divLink.insertAdjacentHTML ("beforeend", `<p>Não tem cadastro? <a id="alt-register-button" href="">Clique aqui</a> para se cadastrar.</p>`)
    
        spanModalBackground.appendChild (divModal)
        divModal.append (header, divModalBody, footerModal)
        header.appendChild (buttonCloseModal)
        buttonCloseModal.appendChild (imgCloseModal)
        divModalBody.append (h2, form, divLink)
        form.append (inputA, inputB, buttonSubmit)
        body.appendChild (spanModalBackground)

        form.addEventListener ("keyup", (even) => {
            if (inputA.value !== "" && inputB.value !== "") {
                buttonSubmit.setAttribute ("class", "purpleButton-enable")
            } else {
                buttonSubmit.setAttribute ("class", "purpleButton")
            }
        })
    }
}