
export const btnLogout = () => {
    localStorage.clear()
    location.replace(`../../../index.html`)
}

export const btnProfile = async () => {
    const divContainerProfile = document.querySelector('.container-profile')
        if (divContainerProfile.classList.contains('close')) {
            divContainerProfile.classList.remove('close')
        } else {
            divContainerProfile.classList.add('close')
        }
}

