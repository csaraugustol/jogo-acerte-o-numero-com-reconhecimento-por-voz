const btnDarkMode = document.querySelector("#btn-dark-mode");

btnDarkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")
    //btnDarkMode.remove();
    //newBtn = document.createElement("button");
   btnDarkModeinnerHTML = `<button id="btn-dark-mode"><i class="fa-solid fa-sun"></i></i></button>`;
})


