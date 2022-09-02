function verificaSeOChuteEhUmValorValido(chute) {
    console.log("chuite", chute === "game over");
    const numero = +chute;

    if(chute === "game over") {
        document.body.innerHTML = `
        <button id="btn-dark-mode" style="display: none"><i class="fa-solid ${darkOrLigth}"></i></button>
        <div class="container">
        <h1 class="errou">Você disse</h1>
        <h2 class="errou">"Game Over"</h2>
        <h3>Clique no botão para reiniciar o jogo</h3>
        <button id="jogar-novamente" class="btn-jogar-novamente">Jogar Novamente <i class="fa-solid fa-rotate-right"></i></button>
        </div>
        `;

        return;
    }

    if(chuteEhInvalido(numero)) {
        elementoChute.innerHTML += `<div class="errou">Valor inválido: Fale um número.</div>`
        return;
    }
    
    if(numeroMaiorOuMenorValorPermiido(numero)) {
        elementoChute.innerHTML += `<div class="errou">Número inválido: Fale um número entre <span>${menorValor}</span> e <span>${maiorValor}</span>.</div>`;
        return;
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
        <button id="btn-dark-mode" style="display: none"><i class="fa-solid ${darkOrLigth}"></i></button>
        <div class="container">
        <h1>Você acertou!</h1>
        <h3>O número secreto era <span class="acertou-numero-secreto">${numeroSecreto}</span></h3>
        <button id="jogar-novamente" class="btn-jogar-novamente">Jogar Novamente <i class="fa-solid fa-rotate-right"></i></button>
        </div>
        `;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div class="errou">O número secreto é menor! <i class="fa-solid fa-arrow-down"></i></div>`
    } else {
        elementoChute.innerHTML += `<div class="errou">O número secreto é maior! <i class="fa-solid fa-arrow-up"></i></div>`
    }
}

function chuteEhInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenorValorPermiido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', (e) => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})
