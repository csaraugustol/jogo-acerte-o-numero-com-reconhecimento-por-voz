function verificaSeOChuteEhUmValorValido(chute) {
    const numero = +chute;

    if(chuteEhInvalido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número.</div>`
    }

    if(numeroMaiorOuMenorValorPermiido(numero)) {
        elementoChute.innerHTML += `<div>Número inválido: Fale um número entre ${menorValor} e ${maiorValor}.</div>`;
    }
}

function chuteEhInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenorValorPermiido(numero) {
    return numero > maiorValor || numero < menorValor;
}
