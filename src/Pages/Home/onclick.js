export const btnLogout = () => {
    console.log('Logout');
}

export const btnProfile = async () => {
    const divContainerProfile = document.querySelector('.container-profile')
        if (divContainerProfile.classList.contains('close')) {
            divContainerProfile.classList.remove('close')
        } else {
            divContainerProfile.classList.add('close')
        }
}

export const btnUpdateInfo = async () => {
    console.log('btnUpdateInfo');
}
