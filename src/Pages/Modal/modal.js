const body = document.querySelector ("body")

function registerAndLoginModal (typeOfModal) {

    const registerModal = "Register Modal"
    const loginModal = "Login Modal"

    spanModalBackground = document.createElement ("span")
    divModal = document.createElement ("div")
    header = document.createElement ("header")
    buttonCloseModal = document.createElement ("button")
    imgCloseModal = document.createElement ("img")
    divModalBody = document.createElement ("div")
    h2 = document.createElement ("h2")
    form = document.createElement ("form")
    inputA = document.createElement ("input")
    inputB = document.createElement ("input")
    inputC = document.createElement ("input")
    inputD = document.createElement ("input")
    buttonSubmit = document.createElement ("button")
    divLink = document.createElement ("div")
    p = document.createElement ("p")
    a = document.createElement ("a")
    footer = document.createElement ("footer")

    spanModalBackground.setAttribute ("class", "modal-background")
    divModal.setAttribute ("class", "modal")
    buttonCloseModal.setAttribute ("class", "close-modal")
    buttonCloseModal.setAttribute ("type", "button")
    imgCloseModal.setAttribute ("src", "../../Img/Close modal - Register and Login.svg")
    imgCloseModal.setAttribute ("alt", "Button close modal")
    divModalBody.setAttribute ("class", "modal-body")
    buttonSubmit.setAttribute ("class", "purpleButton")
    buttonSubmit.setAttribute ("type", "submit")
    divLink.setAttribute ("class", "link")

    if (typeOfModal === "Register Modal") {

        h2.innerText = "Cadastrar"
        form.id = "form-register"
        inputA.setAttribute ("placeholder", "Nome")
        inputA.setAttribute ("type", "text")
        inputA.setAttribute ("id", "name")
        inputA.setAttribute ("name", "input-name")
        inputA.setAttribute ("required", true)

        inputB.setAttribute ("placeholder", "E-mail")
        inputB.setAttribute ("type", "text")
        inputB.setAttribute ("id", "e-mail")
        inputB.setAttribute ("name", "input-email")
        inputB.setAttribute ("required", true)

        inputC.setAttribute ("placeholder", "Senha")
        inputC.setAttribute ("type", "text")
        inputC.setAttribute ("id", "password")
        inputC.setAttribute ("name", "input-password")
        inputC.setAttribute ("required", true)

        inputD.setAttribute ("placeholder", "Senha")
        inputD.setAttribute ("type", "text")
        inputD.setAttribute ("id", "password")
        inputD.setAttribute ("name", "input-password")
        inputD.setAttribute ("required", true)

        buttonSubmit.innerText = "Cadastrar"
        divLink.insertAdjacentHTML ("beforeend", `<p>Já tem cadastro? <a href="">Clique aqui</a> para logar.</p>`)

        spanModalBackground.appendChild (divModal)
        divModal.append (header, divModalBody, footer)
        header.appendChild (buttonCloseModal)
        buttonCloseModal.appendChild (imgCloseModal)
        divModalBody.append (h2, form, divLink)
        form.append (inputA, inputB, inputC, inputD, buttonSubmit)
        body.appendChild (spanModalBackground)

    } else if (typeOfModal === "Login Modal") {

        h2.innerText = "Login"
        form.id = "form-login"
        inputA.setAttribute ("placeholder", "E-mail")
        inputA.setAttribute ("type", "text")
        inputA.setAttribute ("id", "e-mail")
        inputA.setAttribute ("name", "input-email")
        inputA.setAttribute ("required", true)

        inputB.setAttribute ("placeholder", "Senha")
        inputB.setAttribute ("type", "text")
        inputB.setAttribute ("id", "password")
        inputB.setAttribute ("name", "input-password")
        inputB.setAttribute ("required", true)

        buttonSubmit.innerText = "Entrar"
        divLink.insertAdjacentHTML ("beforeend", `<p>Não tem cadastro? <a href="">Clique aqui</a> para se cadastrar.</p>`)
    
        spanModalBackground.appendChild (divModal)
        divModal.append (header, divModalBody, footer)
        header.appendChild (buttonCloseModal)
        buttonCloseModal.appendChild (imgCloseModal)
        divModalBody.append (h2, form, divLink)
        form.append (inputA, inputB, buttonSubmit)
        body.appendChild (spanModalBackground)
    }
}

// registerAndLoginModal ("Register Modal")
// registerAndLoginModal ("Login Modal")