const navScroll = document.getElementsByTagName("nav")[0]

const buttonNav = document.querySelector("nav ul li button")

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        navScroll.style.backgroundColor = "white"
        buttonNav.style.backgroundColor = "lightgreen"
    } else {
        navScroll.style.backgroundColor = "#FFC017"
        buttonNav.style.backgroundColor = "#191919"                 //ce l'ho fattaaaaaaaaaaaaaaaaaaaaaaaaaaaa

    }
})