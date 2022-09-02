let contaTentativas = 0;
const maiorRecorde = JSON.parse(localStorage.getItem("maiorRecorde"));
localStorage.setItem("maiorRecorde", JSON.stringify(Number.MAX_SAFE_INTEGER));

const recorde = document.getElementById("recorde");
if(maiorRecorde === Number.MAX_SAFE_INTEGER || maiorRecorde === null) {
    recorde.innerHTML = ""
} else if (contaTentativas > maiorRecorde){
    recorde.innerHTML = `Recorde: ${maiorRecorde} tentativas`
} else if (maiorRecorde === 1){
    recorde.innerHTML = `Recorde: ${maiorRecorde} tentativa`
} else {
    recorde.innerHTML = `Recorde: ${maiorRecorde} tentativas`
}

function verificaSeOChuteEhUmValorValido(chute) {

    const numero = +chute;
    
    if (chute === "encerrar") {
        document.body.innerHTML = `
        <button id="btn-dark-mode" style="display: none"><i class="fa-solid ${darkOrLigth}"></i></button>
        <div class="container">
        <h1 class="errou">Você disse</h1>
        <h2 class="errou">"Encerrar"</h2>
        <h3>Clique no botão para reiniciar o jogo</h3>
        <button id="jogar-novamente" class="btn-jogar-novamente">Jogar Novamente <i class="fa-solid fa-rotate-right"></i></button>
        </div>
        <audio src="sounds/gameover.wav" id="som-game-over"></audio>
        `;

        let audioGameOver = document.getElementById("som-game-over");
        audioGameOver.play();

        return;
    }

    if (chuteEhInvalido(numero)) {
        elementoChute.innerHTML += `
        <div class="errou">Fale apenas número!</div>
        <audio src="sounds/erro.wav" id="som-erro"></audio>
        `;
        let audioErro = document.getElementById("som-erro");
        audioErro.play();
        return;
    }

    if (numeroMaiorOuMenorValorPermiido(numero)) {
        elementoChute.innerHTML += `<div class="errou">Número inválido: Fale um número entre <span>${menorValor}</span> e <span>${maiorValor}</span>.</div><audio src="sounds/erro.wav" id="som-erro"></audio>
        `;

        let audioErro = document.getElementById("som-erro");
        audioErro.play();
        return;
    }

    if (numero === numeroSecreto) {
        contaTentativas++
        let tipoDisplay;
        if (contaTentativas < maiorRecorde || maiorRecorde === null) {
            localStorage.setItem("maiorRecorde", JSON.stringify(contaTentativas));
            tipoDisplay = "block";
        } else {
            localStorage.setItem("maiorRecorde", JSON.stringify(maiorRecorde));
            tipoDisplay = "none";
        }

        document.body.innerHTML = `
        <button id="btn-dark-mode" style="display: none"><i class="fa-solid ${darkOrLigth}"></i></button>
        <div class="container">
        <i class="fa-solid fa-trophy fa-2xl" style="margin-bottom: 25px"></i>
        <h1>Você acertou</h1>
        <h3>O número secreto era <span class="acertou-numero-secreto">${numeroSecreto}</span></h3>
        <h3>Você conseguiu em <span class="tentativas">${contaTentativas}</span> tentativa(s)</h3>
        <h3 class="acertou-numero-secreto" style="display: ${tipoDisplay}">NOVO RECORDE</h3>
        <button id="jogar-novamente" class="btn-jogar-novamente">Jogar Novamente <i class="fa-solid fa-rotate-right"></i></button>
        </div>
        <audio src="sounds/ganhou.wav" id="som-ganhou"></audio>
        `;
        const audioGanhou = document.getElementById("som-ganhou");
        audioGanhou.play();

    } else if (numero > numeroSecreto) {
        contaTentativas++
        elementoChute.innerHTML += `<div class="errou">O número secreto é menor! <i class="fa-solid fa-arrow-down"></i></div>`
    } else {
        contaTentativas++
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
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})
