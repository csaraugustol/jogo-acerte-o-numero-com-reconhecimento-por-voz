const btnDarkMode = document.querySelector("#btn-dark-mode");

btnDarkMode.addEventListener("click", (e) => {
    document.body.classList.toggle("dark-mode")
    let iconClasses = btnDarkMode.children[0]

    if (iconClasses.classList[1] === "fa-moon") {
        iconClasses.classList.remove("fa-moon");
        iconClasses.classList.toggle("fa-sun")
    } else {
        iconClasses.classList.remove("fa-sun");
        iconClasses.classList.toggle("fa-moon")
    }
})


