/* Comentei algumas linhas para que não interferissem na body, enquanto não forem acionados os toasts pelos modais */
/* const body = document.querySelector ("body") */

export function toast (typeOfMessage, message, moreInfo) {
    
    const error = "error"
    const success = "success"

    const span = document.createElement ("span")
    const div = document.createElement ("div")
    const figure = document.createElement ("figure")
    const img = document.createElement ("img")
    const pMessage = document.createElement ("p")
    const pMoreInfo = document.createElement ("p")
    span.setAttribute ("class", "message")
    span.classList.add ("animation")

    if (typeOfMessage === error){
        span.style.backgroundColor = `var(--alert200-opacity)`
        img.setAttribute ("src", "src/Img/Toast_Error.png")
        img.setAttribute ("alt", "ERROR")
        img.style.backgroundColor = `var(--alert200)`
        pMessage.innerText = message
        pMoreInfo.innerText = moreInfo
        span.append (div, pMoreInfo)
        div.append (figure, pMessage)
        figure.appendChild (img)
       /*  body.append (span) */

    } else if (typeOfMessage === success) {
        span.style.backgroundColor = `var(--sucess100-opacity)`
        img.setAttribute ("src", "src/Img/Toast_Ok.png")
        img.setAttribute ("alt", "SUCCESS")
        img.style.backgroundColor = `var(--sucess100)`
        pMessage.innerText = message
        pMoreInfo.innerText = moreInfo
        span.append (div, pMoreInfo)
        div.append (figure, pMessage)
        figure.appendChild (img)
        /* body.append (span) */
    }
}

// EXCLUIR A LINHA ABAIXO! - Apenas para mostrar como a chamada do modal deve ser feita em caso de SUCESSO.
toast("success", "Sucesso!", "Seja bem vindo! O seu cadastro foi realizado com sucesso. ")

// EXCLUIR A LINHA ABAIXO! - Apenas para mostrar como a chamada do modal deve ser feita em caso de ERRO.
// toast("error", "Erro!", "Favor revise todas as informações passadas e tente outra vez.")