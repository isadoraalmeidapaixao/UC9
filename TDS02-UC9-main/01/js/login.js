document.addEventListener('DOMContentLoaded', () => {
    const authSection = document.getElementById("auth-section")
    const mainContent = document.getElementById("main-content")
    const navMenu = document.getElementById("nav-menu")
    const btnLogout = document.getElementById("btn-logout")
    if(false) {
        authSection.style.display = 'none';
        mainContent.style.display = 'block';
        navMenu.style.display = 'inline-block'
        btnLogout.style.display = 'inline-block'

    } else {
        authSection.style.display = 'block';
        mainContent.style.display = 'none';
        navMenu.style.display = 'none'
        btnLogout.style.display = 'none'
    }
})