const btnDarkMode = document.querySelector("#btn-dark-mode");
const darkOrLigth = btnDarkMode.children[0];
const tipoIcone = JSON.parse(localStorage.getItem("tipoIcone"));

if (tipoIcone === "fa-sun") {
    document.body.classList.toggle("dark-mode")
    verificaDarkMode(darkOrLigth);
}

btnDarkMode.addEventListener("click", (e) => {
    document.body.classList.toggle("dark-mode")
    verificaDarkMode(darkOrLigth);
})


function verificaDarkMode(iconClasses) {
    if (iconClasses.classList[1] === "fa-moon") {
        iconClasses.classList.remove("fa-moon");
        localStorage.setItem("tipoIcone", JSON.stringify("fa-sun"));
        let darkOrLigth = "fa-sun";
        iconClasses.classList.toggle(darkOrLigth);
    } else {
        iconClasses.classList.remove("fa-sun");
        localStorage.setItem("tipoIcone", JSON.stringify("fa-moon"));
        let darkOrLigth = "fa-moon";
        iconClasses.classList.toggle(darkOrLigth);
    }
}

